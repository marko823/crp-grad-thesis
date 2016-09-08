import {Injectable, Inject} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt";
import {Router} from "@angular/router";
import {AUTH_CONFIG} from "../configurations/auth0";
import {EmployeeService} from "./employee.service";
import {GlobalService} from "./global.service";


@Injectable()
export class AuthService {

    constructor(private router:Router,
                @Inject(AUTH_CONFIG) private auth,
                private employeeService:EmployeeService,
                private globalService:GlobalService) {

        var result = this.auth.parseHash(window.location.hash);

        if (result && result.idToken) {
            localStorage.setItem('id_token', result.idToken);
            this.router.navigate(['/dashboard']);
        } else if (result && result.error) {
            alert('error: ' + result.error);
        }

    }

    public login(email, password) {

        this.storeUserId(email);
        
        this.auth.login({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: email,
            password: password,
        }, function (err) {
            if (err) {
                alert("something went wrong: " + err.message);
                localStorage.removeItem('id_user');
            }

        });

    };

    public authenticated() {
        return tokenNotExpired();
    };

    public logout() {
        // Remove tokens from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('id_user');
        this.router.navigate(['/login']);
    };

    getLoggedInUserId() {
        return localStorage.getItem('id_user');
    }

    private storeUserId(email:string) {

        // employees
        let employeeId = this.employeeService.findEmployeeId(email);
        if (employeeId != undefined) {
            localStorage.setItem('id_user', employeeId.toString());
        }

        //admin
        if (this.globalService.adminUser.email.trim() == email.trim()) {
            localStorage.setItem('id_user', this.globalService.adminUser.id.toString());
        }

    }

}