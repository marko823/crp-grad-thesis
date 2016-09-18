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
    }

    sendRequest(request:RequestDaysOff) {
        this.pendingRequests.set(request.employeeId, request);
    }

    getPendingRequests() {
        let result = Array.from(this.pendingRequests.values());
        return result.filter(request => {
            return request.approved == false;
        });
    }

    getApprovedRequestForEmployee(employeeId:number) {
        let employeeRequest = this.pendingRequests.get(employeeId);
        return (employeeRequest && employeeRequest.approved) ? employeeRequest : undefined;
    }

    removeRequest(employeeId:number) {
        this.pendingRequests.delete(employeeId);
    }

    approveRequest(request:RequestDaysOff) {

        let workDaysOff = this.extractWorkDaysFromRequest(request);
        let employeeWorkingDaysMonth = this.employeeService.getEmployee(request.employeeId).workingDaysMonth;

        for (var i = 0; i < employeeWorkingDaysMonth.length; i++) {
            if (this.findMatch(workDaysOff, employeeWorkingDaysMonth[i])) {
                employeeWorkingDaysMonth[i].color = COLOR_OFF;
            }
        }

        request.approved = true;

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
