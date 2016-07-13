import {Component, OnInit} from '@angular/core';
import {EmployeePositionItemComponent} from "./employee-position-item.component";
import {EmployeePosition} from "../../shared/model/employee-position";
import {EmployeePositionService} from "../../shared/services/employee-position.service";

@Component({

    selector: 'employee-positions-list',
    template: `
        <h3>Employee positions list</h3>
        
        <ul class="employees">
          <li *ngFor="let employeePosition of employeePositions">
            <employee-position-item [employeePosition]="employeePosition"></employee-position-item>
          </li>
        </ul>
    `,
    directives: [EmployeePositionItemComponent]
})
export class EmployeePositionsListComponent implements OnInit {

    employeePositions:Array<EmployeePosition>;

    constructor(private employeePositionService:EmployeePositionService) {
    }

    ngOnInit() {
        this.employeePositions = this.employeePositionService.getEmployeePositions();
    }

}
