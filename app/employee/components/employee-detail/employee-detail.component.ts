import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Employee} from "../../../shared/model/employee";

@Component({
    moduleId: module.id,
    selector: 'employee-detail',
    templateUrl: 'employee-detail.component.html',
    styleUrls: ['employee-detail.component.css']
})
export class EmployeeDetailComponent {

    @Input()
    employee:Employee;

    @Output()
    closeEmployeeDetails = new EventEmitter();

    closeEmployeeDetailsHandler() {
        this.closeEmployeeDetails.emit("");
    }

}
