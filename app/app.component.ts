/**
 * Created by martina on 7/2/16.
 */

import {Component} from "@angular/core";
import {AuthService} from "./shared/services/auth.service";
// import {ROUTER_DIRECTIVES} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'my-app',
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html'
})

export class AppComponent {

    constructor(private auth:AuthService) {
    }

    handleLogout() {
        this.auth.logout();
    }

}

