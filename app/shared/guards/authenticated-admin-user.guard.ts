import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {GlobalService} from "../services/global.service";

@Injectable()
export class AuthenticatedAdminUserGuard implements CanActivate {

    constructor(private authService:AuthService, private globalService:GlobalService) {
    }

    canActivate() {
        return this.authService.authenticated() && this.authService.isAdminLoggedIn();
    }
}