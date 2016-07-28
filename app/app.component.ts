/**
 * Created by martina on 7/2/16.
 */

import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {EmployeePositionService} from "./shared/services/employee-position.service";
import {EmployeeService} from "./shared/services/employee.service";
import {ProjectService} from "./shared/services/project.service";
import {UtilityService} from "./shared/services/utility.service";

@Component({
    selector: 'my-app',
    template: `<nav class="navbar navbar-inverse">
                    <a class="navbar-brand" [routerLink]="['/dashboard']">Dashboard</a>
                    <a class="navbar-brand" [routerLink]="['/project']">Projects</a>
                    <a class="navbar-brand" [routerLink]="['/employee']">Employees</a>
                    <a class="navbar-brand" [routerLink]="['/employee-position']">Employee Position</a>
                </nav>
               <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [EmployeePositionService, EmployeeService, ProjectService, UtilityService]
})

export class AppComponent {
}

