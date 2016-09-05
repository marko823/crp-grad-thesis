import {Component, Input, Output, EventEmitter} from "@angular/core";
import {WORK_DAYS} from "../../../shared/model/mock-work-days";
import {Employee} from "../../../shared/model/employee";

@Component({
    moduleId: module.id,
    selector: 'employee-detail',
    templateUrl: 'employee-detail.component.html'
})
export class EmployeeDetailComponent {

    @Input()
    employee:Employee;

    @Output()
    closeEmployeeDetails = new EventEmitter();

    events:any[];

    ngOnInit() {
        this.events = WORK_DAYS;
    }

    closeEmployeeDetailsHandler() {
        this.closeEmployeeDetails.emit("");
    }

}
