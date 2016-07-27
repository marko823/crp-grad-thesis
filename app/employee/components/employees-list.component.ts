import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "../../shared/services/employee.service";
import {Employee} from "../../shared/model/employee";
import {EmployeeItemComponent} from "./employee-item.component";

@Component({

    selector: 'employees-list',
    template: `
            
        <h3>Employees List</h3>
        
        <div class="employees">
          <div *ngFor="let employee of employees">
            <employee-item [employee]="employee"></employee-item>
          </div>
        </div>
        
    `,
    directives: [EmployeeItemComponent]
})
export class EmployeesListComponent implements OnInit {

    employees:Array<Employee>;

    constructor(private employeeService:EmployeeService) {
    }

    ngOnInit() {
        this.employees = this.employeeService.getEmployees();
    }

}
