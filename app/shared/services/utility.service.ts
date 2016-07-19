/**
 * Created by martina on 7/19/16.
 */
import {Injectable} from '@angular/core';
import {Employee} from "../model/employee";
import {Project} from "../model/project";
import {EmployeePosition} from "../model/employee-position";

@Injectable()
export class UtilityService {

    mapEmployeesToSelectItems(employees:Array<Employee>) {
        var items:Array<any> = [];

        for (var i = 0; i < employees.length; i++) {
            items.push({id: i + 1, text: employees[i].fullName});
        }
        return items;
    }

    mapEmployeePositionsToSelectItems(employeePositions:Array<EmployeePosition>) {

        var items : Array<any> = [];
        for (var employeePosition of employeePositions) {
            items.push({id:employeePosition.id, text:employeePosition.name});
        }
        return items;

    }
    
    emptyProject(){
        return new Project(1, "", new Date(), new Date(), new Date(), new Date(), []);
    }
    
    emptyEmployee(){
        return new Employee(1, "", "", "", new EmployeePosition(1, ""), new Date())
    }


}