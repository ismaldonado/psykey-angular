import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginService } from '../login/login.service';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private readonly authService: AuthService,
              private readonly loginService: LoginService,
              private readonly alertService: AlertService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLogin: boolean = this.isLogin();
    const path: string | undefined = route.routeConfig?.path;
    if (isLogin && this.hasPermissions(path)) {
      return true;
    }

    if (path === 'login') {
      return !isLogin;
    } else {
      if (!isLogin) {
        this.alertService.openSnackBar('La sesión ha expirado. Por favor, inicie sesión de nuevo');
        this.loginService.logout();
      }
    }

    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.isLogin();
  }

  private isLogin(): boolean {
    return this.authService.isAuthenticated();
  }

  private hasPermissions(path?: string): boolean {
    return this.authService.hasRoutePermissions(path);
  }
}
