import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import {EmployeePosition} from "../../shared/model/employee-position";

@Component({
    moduleId: module.id,
    selector: 'employee-position-form',
    templateUrl: 'employee-position-form.component.html',
    styles: ['.container { width: 40%; float: left; }']
})

export class EmployeePositionFormComponent {


    model = new EmployeePosition(1, "Frontend developer");

    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;

        this.model = new EmployeePosition(1, "");
        this.active = false;
        setTimeout(()=>this.active = true, 0);

        //TODO
        // persist newly added employee-position data

    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newEmployeePosition() {

        this.submitted = false;
        this.model = new EmployeePosition(1, "");
        this.active = false;
        setTimeout(()=>this.active = true, 0);

    }
}
