import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {EmployeeService} from "../../../shared/services/employee.service";

@Component({
    moduleId: module.id,
    selector: 'employees-table',
    templateUrl: 'employees-table.component.html',
    styleUrls: ['employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {

    employees:Array<any>;

    @Output()
    showDetailsEmployee = new EventEmitter();

    @Output()
    closeEmployeeDetails = new EventEmitter();


    constructor(private employeeService:EmployeeService) {
    }

    ngOnInit() {
        this.employees = this.employeeService.getEmployees();
    }

    ascSort(event:any) {
        this.employees = this.employeeService.sortedEmployees(event, "asc");
    }

    descSort(event:any) {
        this.employees = this.employeeService.sortedEmployees(event, "desc");
    }

    removeEmployee(id:number) {
        this.employees = this.employeeService.removeEmployee(id);
        this.closeEmployeeDetails.emit(id);
    }

    showScheduleForEmployee(employeeId:number) {
        this.showDetailsEmployee.emit(employeeId);
    }

}
