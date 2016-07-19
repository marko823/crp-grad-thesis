/**
 * Created by martina on 7/19/16.
 */
import {Injectable} from '@angular/core';
import {Employee} from "../model/employee";
import {Project} from "../model/project";

@Injectable()
export class UtilityService {

    mapEmployeesToSelectItems(employees:Array<Employee>) {
        var items:Array<any> = [];

        for (var i = 0; i < employees.length; i++) {
            items.push({id: i + 1, text: employees[i].fullName});
        }
        return items;
    }
    
    emptyProject(){
        return new Project(1, '', new Date(), new Date(), new Date(), new Date(), []);
    }


}