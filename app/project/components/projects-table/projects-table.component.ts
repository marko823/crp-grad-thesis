import {Component, OnInit} from "@angular/core";
import {COMMON_DIRECTIVES} from "@angular/common";
import {DND_DIRECTIVES} from "ng2-dnd/ng2-dnd";
import {Project} from "../../../shared/model/project";
import {ProjectService} from "../../../shared/services/project.service";
import {HighlightDirective} from "../../../shared/directives/highlight.directive";
import {SortButtonsComponent} from "../../../shared/components/sort-buttons/sort-buttons.component";
import {DeleteUndoButtonComponent} from "../../../shared/components/delete-undo-button/delete-undo-button.component";

@Component({
    moduleId: module.id,
    selector: 'projects-list',
    templateUrl: 'projects-table.component.html',
    directives: [DeleteUndoButtonComponent, HighlightDirective, SortButtonsComponent, COMMON_DIRECTIVES, DND_DIRECTIVES]
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

    ascSort(event:any) {
        this.projectService.sortedProjects(event, "asc");
    }

    descSort(event:string) {
        this.projectService.sortedProjects(event, "desc");
    }

}
