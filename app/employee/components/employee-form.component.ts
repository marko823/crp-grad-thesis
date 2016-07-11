import {Component, OnInit} from '@angular/core';
import {NgForm}    from '@angular/common';
import {Employee} from "../../shared/model/employee";
import {EmployeePosition} from "../../shared/model/employee-position";
import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select';
import {EmployeeService} from "../../shared/services/employee.service";
import {EmployeePositionService} from "../../shared/services/employee-position.service";

@Component({
    moduleId: module.id,
    selector: 'employee-form',
    templateUrl: 'employee-form.component.html',
    styles: ['.container { width: 40%; float: left; }'],
    directives: [SELECT_DIRECTIVES]
})
export class EmployeeFormComponent implements OnInit {

    employees:Array<Employee>;

    employeePosition:Array<EmployeePosition>;
    employeePositionItems:Array<any>;

    model = new Employee(1, "", "", "", new EmployeePosition(1, ""), new Date());

    submitted = false;
    active = true;

    constructor(private employeeService:EmployeeService, private employeePositionService:EmployeePositionService) {
    }

    ngOnInit() {
        this.employeePosition = this.employeePositionService.getEmployeePositions();
        this.employeePositionItems = this.mapEmployeePositionsToSelectItems(this.employeePosition);

        this.employees = this.employeeService.getEmployees();
        this.printEmployees();
    }

    onSubmit() {

        this.employeeService.addEmployee(this.model);

        this.submitted = true;
        this.model = new Employee(1, "", "", "", new EmployeePosition(1, ""), new Date());
        this.active = false;
        setTimeout(()=>this.active = true, 0);

        this.printEmployees();
    }

    public selected(value:any):void {
        this.model.employeePosition.id = value.id;
        this.model.employeePosition.name = value.text;
    }

    newEmployee() {

        this.submitted = false;
        this.model = new Employee(1, "", "", "", new EmployeePosition(1, ""), new Date());
        this.active = false;
        setTimeout(()=>this.active = true, 0);

    }

    mapEmployeePositionsToSelectItems(employeePositions:Array<EmployeePosition>) {

        var items : Array<any> = [];
        for (var employeePosition of employeePositions) {
            items.push({id:employeePosition.id, text:employeePosition.name});
        }
        return items;

    }

    printEmployees(){
        console.log(this.employees);
    }
}
