import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {EmployeeService} from "./employee.service";
import {GlobalService} from "./global.service";


@Injectable()
export class AuthService {

    errorMsg:string;

    constructor(private router:Router,
                // @Inject(AUTH_CONFIG) private auth,
                private employeeService:EmployeeService,
                private globalService:GlobalService) {

        /*
         var result = this.auth.parseHash(window.location.hash);

         if (result && result.idToken) {
         localStorage.setItem('id_token', result.idToken);
         this.router.navigate(['/dashboard']);
         } else if (result && result.error) {
         alert('error: ' + result.error);
         }
         */

    }

    public login(email, password) {

        this.storeUserId(email);

        /*
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
         */
    };

    public authenticated() {
        // return tokenNotExpired();
        return this.getLoggedInUserId() != undefined;
    };

    public logout() {
        // Remove tokens from localStorage
        localStorage.removeItem('id_user');
        this.router.navigate(['/login']);
    };

    getLoggedInUserId() {
        return localStorage.getItem('id_user');
    }

    isAdminLoggedIn() {
        let loggedInUserId = this.getLoggedInUserId();
        let adminUserId = this.globalService.adminUser.id;

        return loggedInUserId === adminUserId.toString();
    }

    isEmployeeLoggedIn() {
        let loggedInUserId = this.getLoggedInUserId();
        let adminUserId = this.globalService.adminUser.id;

        return this.authenticated() && loggedInUserId != adminUserId.toString();
    }

    private storeUserId(email:string) {

        this.errorMsg = "An error occurred while logging, try again";
        //admin
        if (this.globalService.adminUser.email.trim() == email.trim()) {
            localStorage.setItem('id_user', this.globalService.adminUser.id.toString());
            this.errorMsg = "User " + email + "successfully logged in";
        }
        else {
            // employees
            let employeeId = this.employeeService.findEmployeeId(email);
            if (employeeId != undefined) {
                localStorage.setItem('id_user', employeeId.toString());
                this.errorMsg = "User " + email + "successfully logged in";
            }
        }

    }

    getErrorMsg() {
        return this.errorMsg;
    }

}