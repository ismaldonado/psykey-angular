import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SessionStorageService } from '../storage/session-storage.service';
import { Permission } from '../../model/permission';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly sessionStorageService: SessionStorageService,
    private readonly jwtHelperService: JwtHelperService
  ) {}

  isAuthenticated(): boolean {
    const authToken: string = this.sessionStorageService.get('authToken');

    return authToken ? !this.jwtHelperService.isTokenExpired(authToken) : false;
  }

  hasRoutePermissions(path?: string): boolean {
    const permissions: Array<Permission> =
      this.sessionStorageService.get('permissions');

    return path
      ? permissions.some(
          (permission: Permission) => permission.sectionName === path
        )
      : false;
  }

  hasPermissions(permission: string): boolean {
    const permissions: Array<Permission> =
      this.sessionStorageService.get('permissions');
      
    return permissions.some((value: Permission) => value.name === permission);
  }
}
