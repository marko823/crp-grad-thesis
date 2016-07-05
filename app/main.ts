/**
 * Created by martina on 7/2/16.
 */

import {bootstrap}    from '@angular/platform-browser-dynamic';

import {AppComponent} from './app.component';
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {APP_ROUTER_PROVIDERS} from "./app.routes";

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
])
    .catch((err:any) => console.error(err));
