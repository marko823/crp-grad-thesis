import {Component} from '@angular/core';
import {NgForm, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES}    from '@angular/common';
import {Project}    from '../../shared/model/project';
import {Employee} from "../../shared/model/employee";
import {EmployeePosition} from "../../shared/model/employee-position";
import {SELECT_DIRECTIVES} from "ng2-select/ng2-select";


@Component({
    moduleId: module.id,
    selector: 'project-form',
    templateUrl: 'project-form.component.html',
    styles: ['.container { width: 40%; float: left; }'],
    directives: [SELECT_DIRECTIVES]
})
export class ProjectFormComponent {

    //TODO
    // id is hardcoded, change
    // change date pick
    // change addition of employees


    employees:Array<Employee> = [new Employee(1, "Marta K.", "marta@gmail.com", "078446508", new EmployeePosition(1, "dev"), new Date()),
        new Employee(2, "Nekoj drug K.", "marta@gmail.com", "078446508", new EmployeePosition(1, "dev"), new Date()),
        new Employee(3, "Nekoj drug K.", "marta@gmail.com", "078446508", new EmployeePosition(1, "dev"), new Date())];

    employeeItems:Array<any> = this.mapEmployeesToSelectItems(this.employees);

    model = new Project(1, 'EDA', new Date(), new Date(), new Date(), new Date(), new Array<Employee>());

    submitted = false;
    active = true;


    onSubmit() {
        this.submitted = true;

        this.model = new Project(1, '', new Date(), new Date(), new Date(), new Date(), new Array<Employee>());
        this.active = false;
        setTimeout(()=>this.active = true, 0);

        //TODO
        // persist newly added project data

    }

    public selected(value:any):void {
        this.model.employees.push(this.employees[value.id - 1]);
        this.employees.splice(value.id - 1, 1);
        this.employeeItems = this.mapEmployeesToSelectItems(this.employees);

    }

    public reset(){

        this.employees = [new Employee(1, "Marta K.", "marta@gmail.com", "078446508", new EmployeePosition(1, "dev"), new Date()),
            new Employee(2, "Nekoj drug K.", "marta@gmail.com", "078446508", new EmployeePosition(1, "dev"), new Date()),
            new Employee(3, "Nekoj drug K.", "marta@gmail.com", "078446508", new EmployeePosition(1, "dev"), new Date())];

        this.employeeItems = this.mapEmployeesToSelectItems(this.employees);
        this.model.employees = new Array<Employee>();

    }


    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newProject() {

        this.submitted = false;
        this.model = new Project(1, '', new Date(), new Date(), new Date(), new Date(), new Array<Employee>());
        this.active = false;
        setTimeout(()=>this.active = true, 0);

    }

    mapEmployeesToSelectItems(employees:Array<Employee>) {
        var items:Array<any> = [];

        for (var i = 0; i < employees.length; i++) {
            items.push({id: i + 1, text: employees[i].fullName});
        }
        return items;
    }
}
