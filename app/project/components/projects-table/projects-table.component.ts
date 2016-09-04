import {Component, OnInit} from "@angular/core";
import {Project} from "../../../shared/model/project";
import {ProjectService} from "../../../shared/services/project.service";
// import {COMMON_DIRECTIVES} from "@angular/common";

@Component({
    moduleId: module.id,
    selector: 'projects-table',
    templateUrl: 'projects-table.component.html'
})
export class ProjectsTableComponent implements OnInit {

    projects:Array<Project>;

    constructor(private projectService:ProjectService) {
    }

    ngOnInit() {
        this.projects = this.projectService.getProjects();
    }

    removeProject(index:number) {
        this.projectService.removeProject(index);
    }

    ascSort(event:any) {
        this.projectService.sortedProjects(event, "asc");
    }

    descSort(event:string) {
        this.projectService.sortedProjects(event, "desc");
    }

}
