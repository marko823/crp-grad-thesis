import {Component, OnInit} from "@angular/core";
import {EmployeePosition} from "../../../shared/model/employee-position";
import {EmployeePositionService} from "../../../shared/services/employee-position.service";
import {UtilityService} from "../../../shared/services/utility.service";

@Component({
    moduleId: module.id,
    selector: 'employee-position-form',
    templateUrl: 'employee-position-form.component.html',
    styleUrls: ['employee-position-form.component.css'],
})

export class EmployeePositionFormComponent implements OnInit {

    employeePositions:Array<EmployeePosition>;

    model:EmployeePosition;

    submitted = false;
    active = true;

    constructor(private employeePositionService:EmployeePositionService,
                private utilityService:UtilityService) {
    }

    ngOnInit() {
        this.model = this.utilityService.emptyEmployeePosition();
        this.employeePositions = this.employeePositionService.getEmployeePositions();
    }

    onSubmit() {

        this.employeePositionService.addEmployeePosition(this.model);
        this.employeePositions = this.employeePositionService.getEmployeePositions();

        this.submitted = true;
        this.model = this.utilityService.emptyEmployeePosition();
        this.active = false;
        setTimeout(()=>this.active = true, 0);

    }

    newEmployeePosition() {

        this.submitted = false;
        this.model = this.utilityService.emptyEmployeePosition();
        this.active = false;
        setTimeout(()=>this.active = true, 0);

    }

    printEmployeePositions() {
        console.log(this.employeePositions);
    }

}
