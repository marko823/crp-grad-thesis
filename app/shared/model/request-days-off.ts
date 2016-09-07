/**
 * Created by martina on 9/7/16.
 */

export class RequestDaysOff {

    constructor(public employeeId:number,
                public fromDate:Date,
                public toDate:Date,
                public approved:boolean) {
    }

}