/**
 * Created by martina on 7/19/16.
 */
import {Injectable} from "@angular/core";
import {Employee} from "../model/employee";
import {Project} from "../model/project";
import {EmployeePosition} from "../model/employee-position";
import {EMPLOYEES} from "../model/mock-employees";
import Immutable = require('immutable');

@Injectable()
export class UtilityService {

    mapEmployeesToSelectItems(employees:Array<Employee>) {
        var items:Array<any> = [];

        for (var i = 0; i < employees.length; i++) {
            items.push(employees[i].fullName);
        }
        return Immutable.fromJS(items);
    }

    mapEmployeePositionsToSelectItems(employeePositions:Array<EmployeePosition>) {

        var items:Array<any> = [];
        for (var employeePosition of employeePositions) {
            items.push({id: employeePosition.id, text: employeePosition.name});
        }
        return items;

    }

    buildEmployeeArray(employeeNameArray:Array<any>) {

        let selectedEmployees = [];
        for (var j = 0; j < employeeNameArray.length; j++) {

            for (var i = 0; i < EMPLOYEES.length; i++) {

                if (EMPLOYEES[i]["fullName"] === employeeNameArray[j]) {
                    selectedEmployees.push(EMPLOYEES[i]);
                    break;
                }
            }
        }
        return selectedEmployees;
    }

    emptyProject() {
        return new Project(1, "", new Date(), new Date(), new Date(), new Date(), []);
    }

    emptyEmployee() {
        return new Employee(1, "", "", "", this.emptyEmployeePosition(), new Date())
    }

    emptyEmployeePosition() {
        return new EmployeePosition(1, "");
    }


}