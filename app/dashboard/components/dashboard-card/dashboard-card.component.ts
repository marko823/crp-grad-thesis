import {Component, ViewEncapsulation, Input} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'dashboard-card',
    templateUrl: 'dashboard-card.component.html',
    styleUrls: ['dashboard-card.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DashboardCardComponent {

    @Input()
    dashboardCardModel;

}
