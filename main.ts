/**
 * Created by martina on 7/2/16.
 */

import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app/app.component";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {APP_ROUTER_PROVIDERS} from "./app/app.routes";
import {DND_PROVIDERS} from "ng2-dnd/ng2-dnd";

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    DND_PROVIDERS
])
    .catch((err:any) => console.error(err));
