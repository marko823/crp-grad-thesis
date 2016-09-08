import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../shared/services/auth.service";
import {RequestDaysOff} from "../../shared/model/request-days-off";
import {RequestDaysOffService} from "../../shared/services/request-days-off.service";
import Immutable = require('immutable');

@Component({
    moduleId: module.id,
    selector: 'request-days-off-form',
    templateUrl: 'request-days-off-form.component.html',
    styleUrls: ['request-days-off-form.component.css']

})
export class RequestDaysOffFormComponent implements OnInit {

    fromDate:Date;
    toDate:Date;

    requestedDaysOff:Array<Date>;

    uxMsg:string;

    constructor(private authService:AuthService,
                private requestDaysOffService:RequestDaysOffService) {

    }

    ngOnInit() {
        this.requestedDaysOff = [];
    }

    changeFromDateHandler(event:any) {
        this.clearUxMsg();
        this.fromDate = new Date(event.value);
        this.calculateRequestedDaysOff();
    }

    changeToDateHandler(event:any) {
        this.clearUxMsg();
        this.toDate = new Date(event.value);
        this.calculateRequestedDaysOff();
    }


    calculateRequestedDaysOff() {

        this.requestedDaysOff = [];

        let copyFromDate = new Date(this.fromDate.toJSON());

        while (copyFromDate <= this.toDate) {
            this.requestedDaysOff.push(new Date(copyFromDate.valueOf()));
            copyFromDate = this.incrementDate(copyFromDate);
        }

    }

    incrementDate(currentDate:Date) {
        var dat = new Date(currentDate.valueOf());
        dat.setDate(dat.getDate() + 1);
        return dat;
    }

    sendRequest() {
        let request = new RequestDaysOff(parseInt(this.authService.getLoggedInUserId()),
            this.fromDate, this.toDate, false);
        this.requestDaysOffService.sendRequest(request);
        this.requestedDaysOff = [];
        this.uxMsg = "Request successfully sent";
    }

    clearUxMsg() {
        this.uxMsg = "";
    }

}
