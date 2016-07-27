import {Component, OnInit} from "@angular/core";
import {Project} from "../../shared/model/project";
import {Employee} from "../../shared/model/employee";
import {SELECT_DIRECTIVES} from "ng2-select/ng2-select";
import {ProjectService} from "../../shared/services/project.service";
import {EmployeeService} from "../../shared/services/employee.service";
import {UtilityService} from "../../shared/services/utility.service";


@Component({
    moduleId: module.id,
    selector: 'project-form',
    templateUrl: 'project-form.component.html',
    styleUrls: ['project-form.component.css'],
    directives: [SELECT_DIRECTIVES]
})
export class ProjectFormComponent implements OnInit {

    model:Project;

    employees:Array<Employee>;
    employeeItems:Array<any>;

    projects:Array<Project>;

    active = true;

    constructor(private employeeService:EmployeeService,
                private projectService:ProjectService,
                private utilityService:UtilityService) {
    }

    ngOnInit() {
        this.model = this.utilityService.emptyProject();
        this.employees = this.employeeService.getEmployees();
        this.employeeItems = this.utilityService.mapEmployeesToSelectItems(this.employees);
        this.projects = this.projectService.getProjects();
    }

    onSubmit() {
        this.projectService.addProject(this.model);

        this.model = this.utilityService.emptyProject();
        this.active = false;
        setTimeout(()=>this.active = true, 0);
    }

    public selected(value:any):void {
        this.model.employees.push(this.employees[value.id - 1]);
        this.employees.splice(value.id - 1, 1);
        this.employeeItems = this.utilityService.mapEmployeesToSelectItems(this.employees);
    }

    //TODO
    //not functioning properly
    public reset() {
        this.employees = this.employeeService.getEmployees();
        this.employeeItems = this.utilityService.mapEmployeesToSelectItems(this.employees);
        this.model.employees = [];
    }

    newProject() {
        this.model = this.utilityService.emptyProject();
        this.active = false;
        setTimeout(()=>this.active = true, 0);
    }

    printProjects() {
        console.log(this.projects);
    }

    printModel() {
        console.log(this.model);
    }
}
