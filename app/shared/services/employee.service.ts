import {Injectable} from "@angular/core";
import {EMPLOYEES} from "../model/mock-employees";
import {Employee} from "../model/employee";

@Injectable()
export class EmployeeService {

    getEmployees() {
        return Array.from(EMPLOYEES.values());
    }

    addEmployee(employee:Employee) {
        EMPLOYEES.set(EMPLOYEES.size + 1, employee);
    }

    getEmployee(id:number):Employee {
        return EMPLOYEES.get(id);
    }

    findEmployeeId(email:string) {

        let employeeArray = Array.from(EMPLOYEES.values());

        for (let employee of employeeArray) {
            if (employee.email === email.trim()) {
                return employee.id;
            }
        }
        return undefined;
    }

    removeEmployee(id:number) {
        EMPLOYEES.delete(id);
        return this.getEmployees();
    }

    sortedEmployees(sortProperty:string, order:string) {

        let sortedEmployees = this.getEmployees();

        if (order === 'asc') {
            sortedEmployees.sort((a, b) => {
                if (a[sortProperty] < b[sortProperty]) {
                    return -1;
                } else if (a[sortProperty] > b[sortProperty]) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        else {
            sortedEmployees.sort((a, b) => {
                if (a[sortProperty] < b[sortProperty]) {
                    return 1;
                } else if (a[sortProperty] > b[sortProperty]) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        return sortedEmployees;
    }

}