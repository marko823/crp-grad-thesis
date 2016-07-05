import {provideRouter, RouterConfig} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {ProjectFormComponent} from "./project-form.component";
import {EmployeeFormComponent} from "./employee-form.component";

export const routes:RouterConfig = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'add-project', component: ProjectFormComponent},
    {path: 'add-employee', component: EmployeeFormComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
