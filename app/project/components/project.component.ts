import {Component} from '@angular/core';
import {ProjectFormComponent} from "./project-form.component";

@Component({
    moduleId: module.id,
    selector: 'project',
    template: `
                <h2>Project view</h2>
                <project-form></project-form>
`,
    directives: [ProjectFormComponent]
})

export class ProjectComponent {

}
