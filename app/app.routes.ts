import {DashboardComponent} from "./dashboard/components/dashboard.component";
import {ProjectComponent} from "./project/components/project.component";
import {EmployeeComponent} from "./employee/components/employee.component";
import {EmployeePositionComponent} from "./employee-position/components/employee-position.component";
import {LoginComponent} from "./login/components/login.component";
import {AuthenticatedAdminUserGuard} from "./shared/guards/authenticated-admin-user.guard";
import {UnauthenticatedUserGuard} from "./shared/guards/unauthenticated-user.guard";
import {Routes, RouterModule} from "@angular/router";
import {AuthService} from "./shared/services/auth.service";
import {AUTH0_CONFIG, AUTH_CONFIG} from "./shared/configurations/auth0";
import {RequestDaysOffComponent} from "./request-days-off/request-days-off.component";
import {PendingRequestsComponent} from "./pending-requests/pending-requests.component";
import {AuthenticatedEmployeeUserGuard} from "./shared/guards/authenticated-employee-user.guard";
import {AuthenticatedUserGuard} from "./shared/guards/authenticated-user.guard";
import {EmployeeScheduleComponent} from "./employee-schedule/employee-schedule.component";


const appRoutes:Routes = [
    {path: 'login', component: LoginComponent, canActivate: [UnauthenticatedUserGuard]},
    {path: '', component: DashboardComponent, canActivate: [AuthenticatedUserGuard]},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'project', component: ProjectComponent, canActivate: [AuthenticatedAdminUserGuard]},
    {path: 'employee', component: EmployeeComponent, canActivate: [AuthenticatedAdminUserGuard]},
    {path: 'employee-position', component: EmployeePositionComponent, canActivate: [AuthenticatedAdminUserGuard]},
    {path: 'pending-requests', component: PendingRequestsComponent, canActivate: [AuthenticatedAdminUserGuard]},
    {path: 'request-days-off', component: RequestDaysOffComponent, canActivate: [AuthenticatedEmployeeUserGuard]},
    {path: 'employee-schedule', component: EmployeeScheduleComponent, canActivate: [AuthenticatedEmployeeUserGuard]},
    {path: "**", redirectTo: "login"}
];

export const appRoutingProviders:any[] = [
    {provide: AUTH_CONFIG, useValue: AUTH0_CONFIG},
    AuthService,
    AuthenticatedUserGuard,
    AuthenticatedAdminUserGuard,
    AuthenticatedEmployeeUserGuard,
    UnauthenticatedUserGuard,
];

export const routing:any = RouterModule.forRoot(appRoutes);

