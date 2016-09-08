import {EmployeePosition} from "./employee-position";
import {Employee} from "./employee";

export var ADMIN = new Employee(0, "Admin", "admin@gmail.com", "070111234",
    new EmployeePosition(1, "Backend Developer"), new Date(), []);