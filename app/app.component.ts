/**
 * Created by martina on 7/2/16.
 */

import {Component} from "@angular/core";
import {AuthService} from "./shared/services/auth.service";
// import {ROUTER_DIRECTIVES} from "@angular/router";


@Component({
    selector: 'my-app',
    template: `
                <nav class="navbar navbar-inverse">
                    <a class="navbar-brand" [routerLink]="['/dashboard']">Dashboard</a>
                    <a class="navbar-brand" [routerLink]="['/project']">Projects</a>
                    <a class="navbar-brand" [routerLink]="['/employee']">Employees</a>
                    <a class="navbar-brand" [routerLink]="['/employee-position']">Employee Position</a>
                    <a *ngIf="auth.authenticated()" class="navbar-brand navbar-right" (click)="auth.logout()">Logout</a>
                </nav>
               <router-outlet></router-outlet>
               `,
    // directives: [ROUTER_DIRECTIVES],
    // providers: [
    //     EmployeePositionService,
    //     EmployeeService,
    //     ProjectService,
    //     UtilityService,
    //     GlobalService
    // ]
})

export class AppComponent {

    constructor(private auth:AuthService) {
    }

}

