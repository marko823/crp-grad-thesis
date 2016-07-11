import {Component, OnInit} from '@angular/core';
import {NgForm, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES}    from '@angular/common';
import {Project}    from '../../shared/model/project';
import {Employee} from "../../shared/model/employee";
import {EmployeePosition} from "../../shared/model/employee-position";
import {SELECT_DIRECTIVES} from "ng2-select/ng2-select";
import {ProjectService} from "../../shared/services/project.service";
import {EmployeeService} from "../../shared/services/employee.service";


@Component({
    moduleId: module.id,
    selector: 'project-form',
    templateUrl: 'project-form.component.html',
    styles: ['.container { width: 40%; float: left; }'],
    directives: [SELECT_DIRECTIVES]
})
export class ProjectFormComponent implements OnInit {

    //TODO
    // id is hardcoded, change
    // change date pick

    employees:Array<Employee>;
    employeeItems:Array<any>;
    
    projects:Array<Project>;

    model = new Project(1, '', new Date(), new Date(), new Date(), new Date(), []);

    submitted = false;
    active = true;

    constructor(private employeeService:EmployeeService, private projectService: ProjectService) {
    }
    
    ngOnInit(){
        this.employees = this.employeeService.getEmployees();
        this.employeeItems = this.mapEmployeesToSelectItems(this.employees); 
        this.projects = this.projectService.getProjects();
        this.printProjects();
    }


    onSubmit() {
        
        this.projectService.addProject(this.model);
        this.printProjects();
        
        this.submitted = true;
        this.model = new Project(1, '', new Date(), new Date(), new Date(), new Date(), new Array<Employee>());
        this.active = false;
        setTimeout(()=>this.active = true, 0);

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
    
    printProjects(){
        console.log(this.projects);
    }
}
