/**
 * Created by martina on 7/2/16.
 */

import {Component} from '@angular/core';
import {EmployeeFormComponent} from "./employee-form.component";

@Component({
    selector: 'my-app',
    template: '<employee-form></employee-form>',
    directives: [EmployeeFormComponent]
})

export class AppComponent {
}

