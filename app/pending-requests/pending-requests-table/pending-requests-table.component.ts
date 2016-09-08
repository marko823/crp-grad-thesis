import {Component} from "@angular/core";
import {RequestDaysOffService} from "../../shared/services/request-days-off.service";
import {RequestDaysOff} from "../../shared/model/request-days-off";
import {EmployeeService} from "../../shared/services/employee.service";

@Component({
    moduleId: module.id,
    selector: 'pending-requests-table',
    templateUrl: 'pending-requests-table.component.html'
})
export class PendingRequestsTableComponent {

    pendingRequests:Array<any>;


    constructor(private requestDaysOffService:RequestDaysOffService,
                private employeeService:EmployeeService) {
        this.pendingRequests = requestDaysOffService.getPendingRequests();
    }

    approveRequest(request:RequestDaysOff) {
        this.requestDaysOffService.approveRequest(request);
        this.removeRequestFromList(request);
    }

    disapproveRequest(request:RequestDaysOff) {
        this.requestDaysOffService.removeRequest(request.employeeId);
        this.removeRequestFromList(request);
    }

    removeRequestFromList(request:RequestDaysOff) {
        let index = this.pendingRequests.indexOf(request);
        this.pendingRequests.splice(index, 1);
    }

    employeeFullName(employeeId:number) {
        let employee = this.employeeService.getEmployee(employeeId);
        return employee.fullName;
    }

    noPendingRequests() {
        return this.pendingRequests.length == 0;
    }

}
