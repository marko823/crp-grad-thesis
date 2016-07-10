import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import {Employee} from "../../shared/model/employee";
import {EmployeePosition} from "../../shared/model/employee-position";

@Component({
    moduleId: module.id,
    selector: 'employee-form',
    templateUrl: 'employee-form.component.html'
})
export class EmployeeFormComponent {


    model = new Employee(1, "Marta K.", "marta@gmail.com", "078446508", new EmployeePosition(1, "dev"), new Date());

    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;

        this.model = new Employee(1, "", "", "", new EmployeePosition(1, ""), new Date());
        this.active = false;
        setTimeout(()=>this.active = true, 0);

        //TODO
        // persist newly added employee data

    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newEmployee() {

        this.submitted = false;
        this.model = new Employee(1, "", "", "", new EmployeePosition(1, ""), new Date());
        this.active = false;
        setTimeout(()=>this.active = true, 0);

    }
}
