import {Injectable} from "@angular/core";
import {RequestDaysOff} from "../model/request-days-off";

@Injectable()
export class RequestDaysOffService {

    pendingRequests:Array<RequestDaysOff>;

    constructor() {
        this.pendingRequests = [];
    }

    sendRequest(request:RequestDaysOff) {
        this.pendingRequests.push(request);
    }

}
