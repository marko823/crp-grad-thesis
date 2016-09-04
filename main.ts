import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);


// /**
//  * Created by martina on 7/2/16.
//  */
//
// import {bootstrap} from "@angular/platform-browser-dynamic";
// import {AppComponent} from "./app/app.component";
// import {disableDeprecatedForms, provideForms} from "@angular/forms";
// import {APP_ROUTER_PROVIDERS} from "./app/app.routes";
// import {AuthService} from "./app/shared/services/auth.service";
// import {AUTH0_CONFIG, AUTH_CONFIG} from "./app/shared/configurations/auth0";
//
// bootstrap(AppComponent, [
//     {provide: AUTH_CONFIG, useValue: AUTH0_CONFIG},
//     AuthService,
//     APP_ROUTER_PROVIDERS,
//     disableDeprecatedForms(),
//     provideForms()
// ])
//     .catch((err:any) => console.error(err));
