import {Component, Input} from '@angular/core';
import {Employee} from "../../shared/model/employee";

@Component({
    
    selector: 'employee-item',
    template: `
        <div>
            
            <span>{{employee.fullName}}</span>
            <span id="employeePosition">{{employee.employeePosition.name}}</span>
            
        </div>
`,
    styles: ['#employeePosition { float: right; }'],
})
export class EmployeeItemComponent{
    
    @Input() employee:Employee;

}
