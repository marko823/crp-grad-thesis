import {Component} from "@angular/core";
import {LoginFormComponent} from "./login-form/login-form.component";

@Component({
    selector: 'login',
    template: `
        <h3>Login</h3>
        <login-form></login-form>
    `,
    directives: [LoginFormComponent]
})
export class LoginComponent {

}
