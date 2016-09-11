import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Employee} from "../../../shared/model/employee";
import {EmployeePosition} from "../../../shared/model/employee-position";
import {EmployeeService} from "../../../shared/services/employee.service";
import {EmployeePositionService} from "../../../shared/services/employee-position.service";
import {UtilityService} from "../../../shared/services/utility.service";
import {SelectItem} from "primeng/primeng";

@Component({
    moduleId: module.id,
    selector: 'employee-form',
    templateUrl: 'employee-form.component.html',
    styleUrls: ['employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

    @Output()
    employeeAdded = new EventEmitter();

    model:Employee;

    employees;

    employeePosition:Array<EmployeePosition>;
    employeePositionItems:SelectItem[];


    submitted = false;
    active = true;

    constructor(private employeeService:EmployeeService,
                private employeePositionService:EmployeePositionService,
                private utilityService:UtilityService) {
    }

    ngOnInit() {
        this.model = this.utilityService.emptyEmployee();
        this.employeePosition = this.employeePositionService.getEmployeePositions();
        this.employeePositionItems = this.utilityService.mapEmployeePositionsToSelectItems(this.employeePosition);
        this.employees = this.employeeService.getEmployees();

        this.model.employeePosition = this.employeePositionItems[0].value;
    }

    onSubmit() {
        this.employeeService.addEmployee(this.model);
        this.employeeAdded.emit(this.model);
        this.submitted = true;
        this.model = this.utilityService.emptyEmployee();
        this.model.employeePosition = this.employeePositionItems[0].value;
        this.active = false;
        setTimeout(()=>this.active = true, 0);
    }

    newEmployee() {

        this.submitted = false;
        this.model = this.utilityService.emptyEmployee();
        this.active = false;
        setTimeout(()=>this.active = true, 0);

    }
}
