import {Component, OnInit} from '@angular/core';
import {EmployeePositionItemComponent} from "./employee-position-item.component";
import {EmployeePosition} from "../../shared/model/employee-position";
import {EmployeePositionService} from "../../shared/services/employee-position.service";
import {Project} from "../../shared/model/project";
import {ProjectService} from "../../shared/services/project.service";
import {ProjectItemComponent} from "./project-item.component";

@Component({

    selector: 'projects-list',
    template: `
        <h3>Projects list</h3>
        
        <ul class="projects">
          <li *ngFor="let project of projects">
            <project-item [project]="project"></project-item>
          </li>
        </ul>
    `,
    directives: [ProjectItemComponent]
})
export class ProjectsListComponent implements OnInit {

    projects:Array<Project>;

    constructor(private projectService:ProjectService) {
    }

    ngOnInit() {
        this.projects = this.projectService.getProjects();
    }

}
