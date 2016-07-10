import {Component} from '@angular/core';
import {EmployeeFormComponent} from "./employee-form.component";

@Component({
    moduleId: module.id,
    selector: 'employee',
    template: `
                <h2>Employee view</h2>
                <employee-form></employee-form>
`,
    directives: [EmployeeFormComponent]
})

export class EmployeeComponent {

}
