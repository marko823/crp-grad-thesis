import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import {EmployeePosition} from "../../shared/model/employee-position";

@Component({
    moduleId: module.id,
    selector: 'position-form',
    templateUrl: 'position-form.component.html',
    styles: ['.container { width: 40%; float: left; }']
})

export class PositionFormComponent {


    model = new EmployeePosition(1, "Frontend developer");

    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;

        this.model = new EmployeePosition(1, "");
        this.active = false;
        setTimeout(()=>this.active = true, 0);

        //TODO
        // persist newly added position data

    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newPosition() {

        this.submitted = false;
        this.model = new EmployeePosition(1, "");
        this.active = false;
        setTimeout(()=>this.active = true, 0);

    }
}
