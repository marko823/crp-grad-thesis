import {Injectable} from '@angular/core';
import {EMPLOYEEPOSITIONS} from "../model/mock-employee-positions";
import {EmployeePosition} from "../model/employee-position";

@Injectable()
export class EmployeePositionService {

    //TODO: use promise
    getEmployeePositions() {
        return EMPLOYEEPOSITIONS;
    }

    addEmployeePosition(employeePosition:EmployeePosition) {
        EMPLOYEEPOSITIONS.push(employeePosition);
    }


}
