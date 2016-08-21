import {OpaqueToken} from "@angular/core";

export let AUTH_CONFIG = new OpaqueToken('auth0');

declare var Auth0:any;

export const AUTH0_CONFIG = new Auth0({
    domain: 'marko823.eu.auth0.com',
    clientID: 'mxUFvxwk6tbMC3ghbWxVhr4vl5hbD5rB',
    callbackOnLocationHash: true,
    callbackURL: 'http://localhost:3000/',
});
