import {Component} from "@angular/core";
import {Project} from "../../shared/model/project";
import {Employee} from "../../shared/model/employee";
import {ProjectService} from "../../shared/services/project.service";
import {EmployeeService} from "../../shared/services/employee.service";
import {UtilityService} from "../../shared/services/utility.service";
import {MultipleSelectionComponent} from "../../shared/components/multiple-selection/multiple-selection.component";


@Component({
    moduleId: module.id,
    selector: 'project-form',
    templateUrl: 'project-form.component.html',
    styleUrls: ['project-form.component.css'],
    directives: [MultipleSelectionComponent]
})
export class ProjectFormComponent {

    model:Project;
    employees:Array<Employee>;
    employeeItems:any;

    projects:Array<Project>;

    active = true;

    constructor(private employeeService:EmployeeService,
                private projectService:ProjectService,
                private utilityService:UtilityService) {
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

    newProject() {
        this.model = this.utilityService.emptyProject();
        this.active = false;
        setTimeout(()=>this.active = true, 0);
    }
}
