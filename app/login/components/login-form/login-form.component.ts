import {Component} from "@angular/core";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: ['login-form.component.css']
})
export class LoginFormComponent {

    errorMsg:string;

    constructor(private auth:AuthService) {
        this.errorMsg = "";
    }

    login(email:string, password:string) {
        this.auth.login(email, password);
        this.errorMsg = this.auth.getErrorMsg();
    }

}
