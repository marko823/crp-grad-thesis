import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {EmployeeService} from "./employee.service";
import {GlobalService} from "./global.service";
import {USERS} from "../model/mock-users";


@Injectable()
export class AuthService {

    errorMsg:string;

    constructor(private router:Router,
                private employeeService:EmployeeService,
                private globalService:GlobalService) {
        this.errorMsg = "";
    }

    public login(email, password) {
        if (this.checkUser(email, password)) {
            //admin
            if (this.globalService.adminUser.email.trim() == email.trim()) {
                this.handleSuccessfulLogin(this.globalService.adminUser.id.toString());
            }
            //employee
            else if (this.employeeService.findEmployeeId(email) != undefined) {
                this.handleSuccessfulLogin(this.employeeService.findEmployeeId(email));
            }
            else {
                this.errorMsg = "Try again!";
            }
        }
        else {
            this.errorMsg = "Try again!";
        }
    };

    public logout() {
        localStorage.removeItem('id_user');
        this.router.navigate(['/login']);
    };

    public authenticated() {
        return this.getLoggedInUserId() != undefined;
    };

    getLoggedInUserId() {
        return localStorage.getItem('id_user');
    }

    isAdminLoggedIn() {
        return this.getLoggedInUserId() === this.globalService.adminUser.id.toString();
    }

    isEmployeeLoggedIn() {
        return this.authenticated() && this.getLoggedInUserId() != this.globalService.adminUser.id.toString();
    }

    private checkUser(email, password):boolean {
        let userPassword = USERS.get(email);
        return userPassword != undefined && userPassword == password;
    }

    private handleSuccessfulLogin(userId:string) {
        localStorage.setItem('id_user', userId);
        this.router.navigate(["dashboard"]);
    }

    getErrorMsg() {
        return this.errorMsg;
    }

}