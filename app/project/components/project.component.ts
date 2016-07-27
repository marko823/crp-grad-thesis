import {Component} from "@angular/core";
import {ProjectFormComponent} from "./project-form.component";
import {ProjectsListComponent} from "./projects-list.component";

@Component({
    moduleId: module.id,
    selector: 'project',
    template: `
                <h3>Projects</h3>
                <br>
                <project-form></project-form>
                <projects-list></projects-list>
`,
    directives: [ProjectFormComponent, ProjectsListComponent]
})

export class ProjectComponent {

}
