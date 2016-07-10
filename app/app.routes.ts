import {provideRouter, RouterConfig} from '@angular/router';
import {DashboardComponent} from "./dashboard/components/dashboard.component";
import {ProjectComponent} from "./project/components/project.component";
import {EmployeeComponent} from "./employee/components/employee.component";

export const routes:RouterConfig = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'employee', component: EmployeeComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
