import {Component} from '@angular/core';
import {PositionFormComponent} from "./position-form.component";

@Component({
    moduleId: module.id,
    selector: 'position',
    template: `
                <h2>Position view</h2>
                <position-form></position-form>
`,
    directives: [PositionFormComponent]
})

export class PositionComponent {

}
