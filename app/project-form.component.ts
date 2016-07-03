import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import {Project}    from './project';
import {Employee} from "./employee";

@Component({
    selector: 'project-form',
    templateUrl: 'app/project-form.component.html'
})
export class ProjectFormComponent {

    model = new Project(1, 'EDA', new Date(), new Date(), new Date(), new Date(), new Array<Employee>());
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
