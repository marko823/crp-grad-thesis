/**
 * Created by martina on 7/3/16.
 */

import {EmployeePosition} from "./employee-position";

export class Employee{

    //TODO
    // enum employee type + array of known technologies
    constructor(
        public id: number,
        public fullName: string,
        public email: string,
        public mobileNo: string,
        public employeePosition: EmployeePosition,
        public dateOfEmployment: Date
    ) {  }

}
