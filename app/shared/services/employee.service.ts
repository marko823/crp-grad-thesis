import {Injectable} from '@angular/core';
import {EMPLOYEES} from "../model/mock-employees";
import {Employee} from "../model/employee";

@Injectable()
export class EmployeeService {

    //TODO: use promise
    getEmployees() {
        return EMPLOYEES;
    }

    addEmployee(employee:Employee) {
        EMPLOYEES.push(employee);
    }

}