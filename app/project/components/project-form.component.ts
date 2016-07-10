import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import {Project}    from '../../shared/model/project';
import {Employee} from "../../shared/model/employee";

@Component({
    moduleId: module.id,
    selector: 'project-form',
    templateUrl: 'project-form.component.html',
    styles: ['.container { width: 40%; float: left; }']
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
