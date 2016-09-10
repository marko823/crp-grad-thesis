/**
 * Created by martina on 9/10/16.
 */


import {Component} from "@angular/core";
import {GlobalService} from "../../shared/services/global.service";
import {PageComponent} from "../../shared/components/page/page.component";
import {Employee} from "../shared/model/employee";
import {EmployeeService} from "../shared/services/employee.service";
import {AuthService} from "../shared/services/auth.service";

@Component({
    moduleId: module.id,
    selector: 'employee-schedule',
    templateUrl: 'employee-schedule.component.html'
})

export class EmployeeScheduleComponent {

    employee:Employee;

    constructor(private employeeService:EmployeeService,
                private authService:AuthService) {
        this.employee = this.employeeService.getEmployee(parseInt(authService.getLoggedInUserId()));

    }


}
