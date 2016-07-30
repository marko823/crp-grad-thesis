import {EmployeePosition} from "./employee-position";
import {Employee} from "./employee";

export var EMPLOYEES = new Map()
    .set(1, new Employee(1, "Martina Kost", "marko@gmail.com", "070111222", new EmployeePosition(1, "Backend Developer"), new Date()))
    .set(2, new Employee(2, "Eli Rist", "elri@gmail.com", "070333444", new EmployeePosition(2, "Frontend Developer"), new Date()))
    .set(3, new Employee(3, "Eli Mio", "elimio@gmail.com", "070555666", new EmployeePosition(3, "Full Stack Developer"), new Date()))
    .set(4, new Employee(4, "Sara Stoj", "sarastoj@gmail.com", "070000111", new EmployeePosition(4, "Tester"), new Date()));


// export var EMPLOYEES:Map<number, Employee> = [
//
//     new Employee(1, "Martina Kost", "marko@gmail.com", "070111222", new EmployeePosition(1, "Backend Developer"), new Date()),
//     new Employee(2, "Eli Rist", "elri@gmail.com", "070333444", new EmployeePosition(2, "Frontend Developer"), new Date()),
//     new Employee(3, "Eli Mio", "elimio@gmail.com", "070555666", new EmployeePosition(3, "Full Stack Developer"), new Date()),
//     new Employee(4, "Sara Stoj", "sarastoj@gmail.com", "070000111", new EmployeePosition(4, "Tester"), new Date())
//
// ];