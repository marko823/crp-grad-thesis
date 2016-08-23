import {provideRouter, RouterConfig} from "@angular/router";
import {DashboardComponent} from "./dashboard/components/dashboard.component";
import {ProjectComponent} from "./project/components/project.component";
import {EmployeeComponent} from "./employee/components/employee.component";
import {EmployeePositionComponent} from "./employee-position/components/employee-position.component";
import {LoginComponent} from "./login/components/login.component";
import {AuthenticatedUserGuard} from "./shared/guards/authenticated-user.guard";
import {UnauthenticatedUserGuard} from "./shared/guards/unauthenticated-user.guard";

export const routes:RouterConfig = [
    {path: 'login', component: LoginComponent, canActivate: [UnauthenticatedUserGuard]},
    {path: '', component: DashboardComponent, canActivate: [AuthenticatedUserGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticatedUserGuard]},
    {path: 'project', component: ProjectComponent, canActivate: [AuthenticatedUserGuard]},
    {path: 'employee', component: EmployeeComponent, canActivate: [AuthenticatedUserGuard]},
    {path: 'employee-position', component: EmployeePositionComponent, canActivate: [AuthenticatedUserGuard]},
    {path: "**", redirectTo: "login"}
];

export const APP_ROUTER_PROVIDERS = [
    AuthenticatedUserGuard,
    UnauthenticatedUserGuard,
    provideRouter(routes)
];
