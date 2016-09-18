import {Component} from "@angular/core";
import {RequestDaysOffService} from "../../shared/services/request-days-off.service";
import {RequestDaysOff} from "../../shared/model/request-days-off";
import {AuthService} from "../../shared/services/auth.service";

@Component({
    moduleId: module.id,
    selector: 'approved-request-info',
    templateUrl: 'approved-request-info.component.html'
})
export class ApprovedRequestInfoComponent {

    showInfo:boolean;
    requestDayOff:RequestDaysOff;

    constructor(private requestDaysOffService:RequestDaysOffService,
                private authService:AuthService) {
        let loggedInUserId = authService.getLoggedInUserId();
        this.requestDayOff = requestDaysOffService.getApprovedRequestForEmployee(parseInt(loggedInUserId));
        this.showInfo = this.requestDayOff == undefined ? false : true;
    }

    dismiss() {
        this.requestDaysOffService.removeRequest(this.requestDayOff.employeeId);
        this.showInfo = false;
    }

}
