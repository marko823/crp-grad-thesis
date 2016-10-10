import {Component} from "@angular/core";
import {Project} from "../../../shared/model/project";
import {ProjectService} from "../../../shared/services/project.service";
import {EmployeeService} from "../../../shared/services/employee.service";
import {UtilityService} from "../../../shared/services/utility.service";

@Component({
    moduleId: module.id,
    selector: 'project-form',
    templateUrl: 'project-form.component.html'
})
export class ProjectFormComponent {

    model:Project;
    employees;
    employeeItems:any;

    projects:Array<Project>;

    validPredictedBeginDate:boolean;
    validPredictedEndDate:boolean;
    validRealBeginDate:boolean;
    validRealEndDate:boolean;

    constructor(private employeeService:EmployeeService,
                private projectService:ProjectService,
                private utilityService:UtilityService) {
        this.model = this.utilityService.emptyProject();
        this.employees = this.employeeService.getEmployees();
        this.employeeItems = this.utilityService.mapEmployeesToSelectItems(this.employees);
        this.projects = this.projectService.getProjects();

        this.invalidPredictedDates();
    }

    onSubmit() {
        this.validateOptionalFields();
        this.projectService.addProject(this.model);
        this.newProject();
    }

    private validateOptionalFields() {
        this.model.realBeginDate = this.validRealBeginDate ? this.model.realBeginDate : undefined;
        this.model.realEndDate = this.validRealEndDate ? this.model.realEndDate : undefined;
    }

    newProject() {
        this.model = this.utilityService.emptyProject();
        this.invalidPredictedDates();
    }

    handlePredictedBeginChange() {
        this.validPredictedBeginDate = true;
    }

    handlePredictedEndChange() {
        this.validPredictedEndDate = true;
    }

    handleRealBeginChange() {
        this.validRealBeginDate = true;
    }

    handleRealEndChange() {
        this.validRealEndDate = true;
    }

    invalidPredictedDates() {
        this.validPredictedBeginDate = false;
        this.validPredictedEndDate = false;
        this.validRealBeginDate = false;
        this.validRealEndDate = false;
    }
}
