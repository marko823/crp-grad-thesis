import {Component} from "@angular/core";

@Component({
    selector: 'pending-requests',
    template: `
        <div class="col-md-10 scrollable-content">
        <h3>Pending requests</h3>
        <pending-requests-table></pending-requests-table>
        </div>
    `
})
export class PendingRequestsComponent {


}