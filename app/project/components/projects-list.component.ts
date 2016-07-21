import {Component, OnInit} from "@angular/core";
import {Project} from "../../shared/model/project";
import {ProjectService} from "../../shared/services/project.service";
import {ProjectItemComponent} from "./project-item.component";
import {HighlightDirective} from "../../shared/directives/highlight.directive";
import {COMMON_DIRECTIVES} from "@angular/common";
import {DND_DIRECTIVES} from "ng2-dnd/ng2-dnd";

@Component({
    moduleId: module.id,
    selector: 'projects-list',
    templateUrl: 'projects-list.component.html',
    directives: [ProjectItemComponent, HighlightDirective, COMMON_DIRECTIVES, DND_DIRECTIVES]
})
export class ProjectsListComponent implements OnInit {

    projects:Array<Project>;

    constructor(private projectService:ProjectService) {
    }

    ngOnInit() {
        this.projects = this.projectService.getProjects();
    }

    removeProject(index:number) {
        this.projectService.removeProject(index);
    }

}
