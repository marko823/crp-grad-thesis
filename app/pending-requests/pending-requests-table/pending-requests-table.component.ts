import {Component} from "@angular/core";
import {EmployeeService} from "../../../shared/services/employee.service";
import {RequestDaysOffService} from "../../shared/services/request-days-off.service";
import {RequestDaysOff} from "../../shared/model/request-days-off";

@Component({
    moduleId: module.id,
    selector: 'pending-requests-table',
    templateUrl: 'pending-requests-table.component.html'
})
export class PendingRequestsTableComponent {

    pendingRequests:Array<any>;


    constructor(private requestDaysOffService:RequestDaysOffService) {
        this.pendingRequests = requestDaysOffService.getPendingRequests();
    }

    approveRequest(request:RequestDaysOff) {
        this.requestDaysOffService.approveRequest(request);
        let index = this.pendingRequests.indexOf(request);
        this.pendingRequests.splice(index, 1);
    }

    //TODO
    //change request model to have unique id
    disapproveRequest(request:RequestDaysOff) {
        this.requestDaysOffService.removeRequest(request.employeeId);
    }

}
