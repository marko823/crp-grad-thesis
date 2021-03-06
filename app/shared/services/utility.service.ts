/**
 * Created by martina on 7/19/16.
 */
import {Injectable} from "@angular/core";
import {Employee} from "../model/employee";
import {Project} from "../model/project";
import {EmployeePosition} from "../model/employee-position";
import {EMPLOYEES} from "../model/mock-employees";
import {SelectItem} from "primeng/primeng";

import Immutable = require('immutable');

@Injectable()
export class UtilityService {

    mapEmployeesToSelectItems(employees:Array<Employee>) {
        var items:Array<SelectItem> = [];
        for (var i = 0; i < employees.length; i++) {
            let selectItemObj = {label: employees[i].fullName, value: employees[i]};
            items.push(selectItemObj);
        }
        return items;
    }

    mapEmployeePositionsToSelectItems(employeePositions:Array<EmployeePosition>) {

        var items:Array<SelectItem> = [];
        for (var employeePosition of employeePositions) {
            let selectItemObj = {label: employeePosition.name, value: employeePosition};
            items.push(selectItemObj);
        }
        return items;

    }

    buildEmployeeArray(employeeNameArray:Array<any>) {

        let selectedEmployees = [];
        for (var j = 0; j < employeeNameArray.length; j++) {

            let id = employeeNameArray[j].id;
            if (EMPLOYEES[id] != undefined) {
                selectedEmployees.push(EMPLOYEES[id]);
            }
        }
        return selectedEmployees;
    }

    emptyProject() {
        return new Project(1, "", new Date(), new Date(), new Date(), new Date(), []);
    }

    emptyEmployee() {
        return new Employee(1, "", "", "", this.emptyEmployeePosition(), new Date(), [])
    }

    emptyEmployeePosition() {
        return new EmployeePosition(1, "");
    }


}