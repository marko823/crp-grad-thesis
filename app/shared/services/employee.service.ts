import {Injectable} from "@angular/core";
import {EMPLOYEES} from "../model/mock-employees";
import {Employee} from "../model/employee";

@Injectable()
export class EmployeeService {

    //TODO: use promise
    getEmployees() {
        return Array.from(EMPLOYEES.values());
    }

    addEmployee(employee:Employee) {
        EMPLOYEES.set(EMPLOYEES.size + 1, employee);
        console.log(EMPLOYEES);
    }

    getEmployee(id:number) {
        return EMPLOYEES[id];
    }

}