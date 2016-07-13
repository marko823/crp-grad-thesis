import {Component, Input} from '@angular/core';
import {EmployeePosition} from "../../shared/model/employee-position";

@Component({
    
    selector: 'employee-position-item',
    template: `
        <div>{{employeePosition.name}}</div>
`
})
export class EmployeePositionItemComponent{
    
    @Input() employeePosition:EmployeePosition;

}
