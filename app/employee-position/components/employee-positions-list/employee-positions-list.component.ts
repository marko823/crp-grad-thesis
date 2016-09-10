import {Component, OnInit} from "@angular/core";
import {EmployeePosition} from "../../../shared/model/employee-position";
import {EmployeePositionService} from "../../../shared/services/employee-position.service";

@Component({
    moduleId: module.id,
    selector: 'employee-positions-list',
    templateUrl: 'employee-positions-list.component.html'
    
})
export class EmployeePositionsListComponent implements OnInit {

    employeePositions:Array<EmployeePosition>;

    constructor(private employeePositionService:EmployeePositionService) {
    }

    ngOnInit() {
        this.employeePositions = this.employeePositionService.getEmployeePositions();
    }

}
