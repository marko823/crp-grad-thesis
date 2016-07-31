import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "../../../shared/services/employee.service";
import {SortButtonsComponent} from "../../../shared/components/sort-buttons/sort-buttons.component";
import {DeleteUndoButtonComponent} from "../../../shared/components/delete-undo-button/delete-undo-button.component";

@Component({
    moduleId: module.id,
    selector: 'employees-table',
    templateUrl: 'employees-table.component.html',
    directives: [DeleteUndoButtonComponent, SortButtonsComponent]
})
export class EmployeesTableComponent implements OnInit {

    employees:Array<any>;

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
    }

}
