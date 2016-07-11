import {Component} from '@angular/core';
import {EmployeePositionFormComponent} from "./employee-position-form.component";

@Component({
    moduleId: module.id,
    selector: 'employee-position',
    template: `
                <h2>Employee position view</h2>
                <employee-position-form></employee-position-form>
`,
    directives: [EmployeePositionFormComponent]
})

export class EmployeePositionComponent {

}
