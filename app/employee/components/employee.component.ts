import {Component} from '@angular/core';
import {EmployeeFormComponent} from "./employee-form.component";
import {EmployeesListComponent} from "./employees-list.component";

@Component({
    moduleId: module.id,
    selector: 'employee',
    template: `
                <h2>Employee view</h2>
                <employee-form></employee-form>
                <employees-list></employees-list>
`,
    directives: [EmployeeFormComponent, EmployeesListComponent]
})

export class EmployeeComponent {

}
