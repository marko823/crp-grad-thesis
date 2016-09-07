import {DashboardComponent} from "./dashboard/components/dashboard.component";
import {ProjectComponent} from "./project/components/project.component";
import {EmployeeComponent} from "./employee/components/employee.component";
import {EmployeePositionComponent} from "./employee-position/components/employee-position.component";
import {LoginComponent} from "./login/components/login.component";
import {AuthenticatedUserGuard} from "./shared/guards/authenticated-user.guard";
import {UnauthenticatedUserGuard} from "./shared/guards/unauthenticated-user.guard";
import {Routes, RouterModule} from "@angular/router";
import {AuthService} from "./shared/services/auth.service";
import {AUTH0_CONFIG, AUTH_CONFIG} from "./shared/configurations/auth0";
import {RequestDaysOffComponent} from "./request-days-off/request-days-off.component";


const appRoutes:Routes = [
    {path: 'login', component: LoginComponent, canActivate: [UnauthenticatedUserGuard]},
    {path: '', component: DashboardComponent, canActivate: [AuthenticatedUserGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticatedUserGuard]},
    {path: 'project', component: ProjectComponent, canActivate: [AuthenticatedUserGuard]},
    {path: 'employee', component: EmployeeComponent, canActivate: [AuthenticatedUserGuard]},
    {path: 'employee-position', component: EmployeePositionComponent, canActivate: [AuthenticatedUserGuard]},
    {path: 'request-days-off', component: RequestDaysOffComponent},
    {path: "**", redirectTo: "login"}
];

export const appRoutingProviders:any[] = [
    {provide: AUTH_CONFIG, useValue: AUTH0_CONFIG},
    AuthService,
    AuthenticatedUserGuard,
    UnauthenticatedUserGuard,
];

export const routing:any = RouterModule.forRoot(appRoutes);

