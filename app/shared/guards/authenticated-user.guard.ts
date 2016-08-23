import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";

@Injectable()
export class AuthenticatedUserGuard implements CanActivate {

    constructor(private authService:AuthService) {
    }

    canActivate() {
        return this.authService.authenticated();
    }
}