/**
 * Created by martina on 7/2/16.
 */

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'my-app',
    template: `<h1>Component Router</h1>
                <nav>
                    <a [routerLink]="['/dashboard']">Dashboard</a>
                    <a [routerLink]="['/project']">Project view</a>
                    <a [routerLink]="['/employee']">Employee view</a>
                    <a [routerLink]="['/position']">Position view</a>
                </nav>
               <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
}

