import {Component, OnInit} from '@angular/core';
import {NgForm}    from '@angular/common';
import {EmployeePosition} from "../../shared/model/employee-position";
import {EmployeePositionService} from "../../shared/services/employee-position.service";

@Component({
    moduleId: module.id,
    selector: 'employee-position-form',
    templateUrl: 'employee-position-form.component.html',
    styles: ['.container { width: 40%; float: left; }']
})

export class EmployeePositionFormComponent implements OnInit {

    employeePositions:Array<EmployeePosition>;

    model = new EmployeePosition(1, "");

    submitted = false;
    active = true;

    constructor(private employeePositionService:EmployeePositionService) {
    }

    ngOnInit() {
        this.employeePositions = this.employeePositionService.getEmployeePositions();
        this.printEmployeePositions();
    }

    onSubmit() {

        this.employeePositionService.addEmployeePosition(this.model);
        this.employeePositions = this.employeePositionService.getEmployeePositions();

        this.submitted = true;
        this.model = new EmployeePosition(1, "");
        this.active = false;
        setTimeout(()=>this.active = true, 0);

        this.printEmployeePositions();

    }

    newEmployeePosition() {

        this.submitted = false;
        this.model = new EmployeePosition(1, "");
        this.active = false;
        setTimeout(()=>this.active = true, 0);

    }

    printEmployeePositions() {
        console.log(this.employeePositions);
    }

}
