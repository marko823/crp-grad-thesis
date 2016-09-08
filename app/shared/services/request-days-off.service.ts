import {Injectable} from "@angular/core";
import {RequestDaysOff} from "../model/request-days-off";
import {WorkDay} from "../model/work-day";
import {SHIFT_TYPE, COLOR_OFF} from "../model/mock-work-days";
import {EmployeeService} from "./employee.service";

@Injectable()
export class RequestDaysOffService {

    pendingRequests:Map<number, RequestDaysOff>;

    constructor(private employeeService:EmployeeService) {
        this.pendingRequests = new Map<number, RequestDaysOff>();
        localStorage.removeItem("requests");
        localStorage.setItem("requests", JSON.stringify(this.pendingRequests));
        // alert(JSON.stringify(this.pendingRequests));
    }

    sendRequest(request:RequestDaysOff) {
        this.pendingRequests.set(request.employeeId, request);
        localStorage.removeItem("requests");
        localStorage.setItem("requests", JSON.stringify(this.pendingRequests));
        alert(JSON.stringify(this.pendingRequests));
    }

    getPendingRequests() {
        return Array.from(this.pendingRequests.values());
    }

    //TODO
    //change request model to have unique id
    removeRequest(employeeId:number) {
        this.pendingRequests.delete(employeeId);
        localStorage.removeItem("requests");
        localStorage.setItem("requests", JSON.stringify(this.pendingRequests));
        alert(JSON.stringify(this.pendingRequests));
    }

    approveRequest(request:RequestDaysOff) {

        let workDaysOff = this.extractWorkDaysFromRequest(request);
        let employeeWorkingDaysMonth = this.employeeService.getEmployee(request.employeeId).workingDaysMonth;

        for (var i = 0; i < employeeWorkingDaysMonth.length; i++) {
            if (this.findMatch(workDaysOff, employeeWorkingDaysMonth[i])) {
                employeeWorkingDaysMonth[i].color = COLOR_OFF;
            }
        }

        this.removeRequest(request.employeeId);
    }

    findMatch(workDaysOff:Array<WorkDay>, workDay:WorkDay):boolean {
        for (let workDayOff of workDaysOff) {
            if (workDayOff.start == workDay.start) {
                return true;
            }
        }
        return false;
    }


    extractWorkDaysFromRequest(request:RequestDaysOff) {
        let approvedWorkDaysOff = [];
        let copyFromDate = new Date(request.fromDate.toJSON());

        while (copyFromDate <= request.toDate) {

            let approvedWorkDayOff =
                new WorkDay(SHIFT_TYPE, copyFromDate.toISOString().substring(0, 10), COLOR_OFF);

            approvedWorkDaysOff.push(approvedWorkDayOff);
            copyFromDate = this.incrementDate(copyFromDate);

        }
        return approvedWorkDaysOff;
    }


    incrementDate(currentDate:Date) {
        var dat = new Date(currentDate.valueOf());
        dat.setDate(dat.getDate() + 1);
        return dat;
    }

}
