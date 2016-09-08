import {CanActivate} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthenticatedUserGuard implements CanActivate {

    constructor(private authService:AuthService) {
    }

    canActivate() {
        return this.authService.authenticated();
    }
}
