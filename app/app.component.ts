/**
 * Created by martina on 7/2/16.
 */

import {Component} from '@angular/core';
import {ProjectFormComponent} from "./project-form.component";

@Component({
    selector: 'my-app',
    template: '<project-form></project-form>',
    directives: [ProjectFormComponent]
})
export class AppComponent {
}

