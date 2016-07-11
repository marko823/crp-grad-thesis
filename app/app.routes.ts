import {provideRouter, RouterConfig} from '@angular/router';
import {DashboardComponent} from "./dashboard/components/dashboard.component";
import {ProjectComponent} from "./project/components/project.component";
import {EmployeeComponent} from "./employee/components/employee.component";
import {EmployeePositionComponent} from "./employee-position/components/employee-position.component";

export const routes:RouterConfig = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'employee', component: EmployeeComponent},
    {path: 'employee-position', component: EmployeePositionComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
