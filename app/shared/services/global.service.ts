import {Injectable} from "@angular/core";
import {Employee} from "../model/employee";
import {ADMIN} from "../model/mock-admin";
/**
 * Created by martina on 7/30/16.
 */

@Injectable()
export class GlobalService {

    adminUser:Employee = ADMIN;

    showProjectsInfoBox:boolean;
    showEmployeesInfoBox:boolean;
    showEmployeePositionsInfoBox:boolean;

    constructor() {
        this.showEmployeePositionsInfoBox = true;
        this.showEmployeesInfoBox = true;
        this.showProjectsInfoBox = true;
    }

    setShowProjectsInfoBox(showProjectsInfoBox:boolean) {
        this.showProjectsInfoBox = showProjectsInfoBox;
    }

    setShowEmployeesInfoBox(showEmployeesInfoBox:boolean) {
        this.showEmployeesInfoBox = showEmployeesInfoBox;
    }

    setShowEmployeePositionsInfoBox(showEmployeeProjectsInfoBox:boolean) {
        this.showEmployeePositionsInfoBox = showEmployeeProjectsInfoBox;
    }

    getShowProjectsInfoBox() {
        return this.showProjectsInfoBox;
    }

    getShowEmployeesInfoBox() {
        return this.showEmployeesInfoBox;
    }

    getShowEmployeePositionsInfoBox() {
        return this.showEmployeePositionsInfoBox;
    }


}
