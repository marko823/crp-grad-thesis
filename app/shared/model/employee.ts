/**
 * Created by martina on 7/3/16.
 */

import {EmployeePosition} from "./employee-position";
import {WorkDay} from "./work-day";
import {WORK_DAYS} from "./mock-work-days";

export class Employee {

    constructor(public id:number,
                public fullName:string,
                public email:string,
                public mobileNo:string,
                public employeePosition:EmployeePosition,
                public dateOfEmployment:Date,
                public workingDaysMonth:Array<WorkDay>) {

        this.workingDaysMonth = this.copyOfWorkingDaysMonth();

    }

    copyOfWorkingDaysMonth() {
        var result = [];
        for (let workDay of WORK_DAYS) {
            result.push(workDay);
        }
        return result;
    }

}
