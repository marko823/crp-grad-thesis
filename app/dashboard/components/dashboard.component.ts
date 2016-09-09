import {Component} from "@angular/core";
import {ADMIN_DASHBOARD_CARDS} from "../../shared/model/admin-dashboard-cards";
import {EMPLOYEE_DASHBOARD_CARDS} from "../../shared/model/employee-dashboard-cards";
import {AuthService} from "../../shared/services/auth.service";

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

    dashboardCards;

    constructor(private authService:AuthService) {
        if (this.authService.isAdminLoggedIn())
            this.dashboardCards = ADMIN_DASHBOARD_CARDS;
        else if (this.authService.isEmployeeLoggedIn())
            this.dashboardCards = EMPLOYEE_DASHBOARD_CARDS;
    }

}
