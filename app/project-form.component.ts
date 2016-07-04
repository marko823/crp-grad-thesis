import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import {Project}    from './project';
import {Employee} from "./employee";

@Component({
    selector: 'project-form',
    templateUrl: 'app/project-form.component.html'
})
export class ProjectFormComponent {

    //TODO
    // id is hardcoded, change
    // change date pick
    // change addition of employees
    
    model = new Project(1, 'EDA', new Date(), new Date(), new Date(), new Date(), new Array<Employee>());

    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;
        
        this.model = new Project(1, '', new Date(), new Date(), new Date(), new Date(), new Array<Employee>());
        this.active = false;
        setTimeout(()=>this.active = true, 0);

        //TODO
        // persist newly added project data

    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newProject() {

        this.submitted = false;
        this.model = new Project(1, '', new Date(), new Date(), new Date(), new Date(), new Array<Employee>());
        this.active = false;
        setTimeout(()=>this.active = true, 0);

    }
}
