import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import {Employee} from "../../shared/model/employee";
import {EmployeePosition} from "../../shared/model/employee-position";
import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select';

@Component({
    moduleId: module.id,
    selector: 'employee-form',
    templateUrl: 'employee-form.component.html',
    directives: [SELECT_DIRECTIVES]
})
export class EmployeeFormComponent {

    //TODO
    //add lifecycle hook onInit

    //TODO
    //take values from backend
    employeePosition:Array<EmployeePosition> =
        [new EmployeePosition(1, "backend"), new EmployeePosition(1, "frontend")];


    employeePositionItems:Array<any> = this.mapEmployeePositionsToSelectItems(this.employeePosition);
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

    public selected(value:any):void {
        this.model.employeePosition.id = value.id;
        this.model.employeePosition.name = value.text;
    }

    newEmployee() {

        this.submitted = false;
        this.model = new Employee(1, "", "", "", new EmployeePosition(1, ""), new Date());
        this.active = false;
        setTimeout(()=>this.active = true, 0);

    }

    mapEmployeePositionsToSelectItems(employeePositions:Array<EmployeePosition>) {

        var items : Array<any> = [];
        for (var employeePosition of employeePositions) {
            items.push({id:employeePosition.id, text:employeePosition.name});
        }
        return items;

    }
}
