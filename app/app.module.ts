/**
 * Created by martina on 9/4/16.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {routing, appRoutingProviders} from "./app.routes";
import {LoginComponent} from "./login/components/login.component";
import {DashboardComponent} from "./dashboard/components/dashboard.component";
import {ProjectComponent} from "./project/components/project.component";
import {EmployeeComponent} from "./employee/components/employee.component";
import {EmployeePositionComponent} from "./employee-position/components/employee-position.component";
import {LoginFormComponent} from "./login/components/login-form/login-form.component";
import {InfoBoxComponent} from "./shared/components/info-box/info-box.component";
import {ProjectFormComponent} from "./project/components/project-form/project-form.component";
import {ProjectsTableComponent} from "./project/components/projects-table/projects-table.component";
import {DeleteUndoButtonComponent} from "./shared/components/delete-undo-button/delete-undo-button.component";
import {HighlightDirective} from "./shared/directives/highlight.directive";
import {SortButtonsComponent} from "./shared/components/sort-buttons/sort-buttons.component";
import {GlobalService} from "./shared/services/global.service";
import {ProjectService} from "./shared/services/project.service";
import {EmployeesTableComponent} from "./employee/components/employees-table/employees-table.component";
import {EmployeeFormComponent} from "./employee/components/employee-form/employee-form.component";
import {EmployeeDetailComponent} from "./employee/components/employee-detail/employee-detail.component";
import {EmployeeService} from "./shared/services/employee.service";
import {EmployeePositionService} from "./shared/services/employee-position.service";
import {UtilityService} from "./shared/services/utility.service";
import {ScheduleModule} from "primeng/components/schedule/schedule";
import {RequestDaysOffComponent} from "./request-days-off/request-days-off.component";
import {RequestDaysOffFormComponent} from "./request-days-off/request-days-off-form/request-days-off-form.component";
import {RequestDaysOffService} from "./shared/services/request-days-off.service";
import {PendingRequestsComponent} from "./pending-requests/pending-requests.component";
import {PendingRequestsTableComponent} from "./pending-requests/pending-requests-table/pending-requests-table.component";
import {DashboardCardComponent} from "./dashboard/components/dashboard-card/dashboard-card.component";
import {EmployeePositionFormComponent} from "./employee-position/components/empoloyee-position-form/employee-position-form.component";
import {EmployeePositionsListComponent} from "./employee-position/components/employee-positions-list/employee-positions-list.component";
import {EmployeeScheduleComponent} from "./employee-schedule/employee-schedule.component";
import {DropdownModule, MultiSelectModule} from "primeng/primeng";
import {ApprovedRequestInfoComponent} from "./request-days-off/approved-request-info/approved-request-info.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ScheduleModule,
        DropdownModule,
        MultiSelectModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        ProjectComponent,
        EmployeeComponent,
        EmployeePositionComponent,
        LoginFormComponent,
        InfoBoxComponent,
        ProjectFormComponent,
        ProjectsTableComponent,
        HighlightDirective,
        DeleteUndoButtonComponent,
        SortButtonsComponent,
        EmployeeFormComponent,
        EmployeesTableComponent,
        EmployeeDetailComponent,
        EmployeePositionFormComponent,
        EmployeePositionsListComponent,
        RequestDaysOffFormComponent,
        RequestDaysOffComponent,
        PendingRequestsTableComponent,
        PendingRequestsComponent,
        DashboardCardComponent,
        EmployeeScheduleComponent,
        ApprovedRequestInfoComponent

    ],
    bootstrap: [AppComponent],
    providers: [
        appRoutingProviders,
        GlobalService,
        ProjectService,
        EmployeeService,
        EmployeePositionService,
        UtilityService,
        RequestDaysOffService
    ]
})
export class AppModule {

}
