import {Component} from "@angular/core";

@Component({
    selector: 'request-days-off',
    template: `
        <div class="col-md-10 scrollable-content">
        <h3>Request Days Off</h3>
        <request-days-off-form></request-days-off-form>
        </div>
    `
})
export class RequestDaysOffComponent {

}
