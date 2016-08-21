import {Component} from "@angular/core";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: ['login-form.component.css']
})
export class LoginFormComponent {

    constructor(private auth:AuthService) {
    }

    login(username:string, password:string) {
        this.auth.login(username, password);
    }

    userAuthenticated() {
        return this.auth.authenticated();
    }

}
