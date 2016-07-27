import {Component} from "@angular/core";
import {EmployeePositionFormComponent} from "./employee-position-form.component";
import {EmployeePositionsListComponent} from "./employee-positions-list.component";

@Component({
    moduleId: module.id,
    selector: 'employee-position',
    template: `
                <h3>Employee positions</h3>
                <br>
                <employee-position-form></employee-position-form>
                <employee-positions-list></employee-positions-list>
`,
    directives: [EmployeePositionFormComponent, EmployeePositionsListComponent]
})

export class EmployeePositionComponent {

}
