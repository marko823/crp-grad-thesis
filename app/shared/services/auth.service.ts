import {Injectable, Inject} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt";
import {Router} from "@angular/router";
import {AUTH_CONFIG} from "../configurations/auth0";


@Injectable()
export class AuthService {


    constructor(private router:Router, @Inject(AUTH_CONFIG) private auth) {

        var result = this.auth.parseHash(window.location.hash);

        if (result && result.idToken) {
            localStorage.setItem('id_token', result.idToken);
            this.router.navigate(['/home']);
        } else if (result && result.error) {
            alert('error: ' + result.error);
        }

    }

    public login(username, password) {

        this.auth.login({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: username,
            password: password,
        }, function (err) {
            if (err) alert("something went wrong: " + err.message);
        });
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };
}