import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccessInfo } from '../../model/access-info';
import { filter, tap } from 'rxjs/operators';
import { SessionStorageService } from '../storage/session-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API_PATH = '/api/auth';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly sessionStorageService: SessionStorageService,
    private readonly router: Router
  ) {}

  private static headers(credentials: {
    username: string;
    password: string;
  }): HttpHeaders {
    return new HttpHeaders(
      credentials
        ? {
            authorization:
              'Basic ' +
              btoa(credentials.username + ':' + credentials.password),
          }
        : {}
    );
  }

  login(username: string, password: string): Observable<AccessInfo> {
    return this.httpClient
      .post<AccessInfo>(
        this.API_PATH + '/login',
        {},
        {
          headers: LoginService.headers({
            username,
            password,
          }),
        }
      )
      .pipe(
        filter((accessResponse: AccessInfo) => !!accessResponse),
        tap((accessResponse: AccessInfo) => {
          this.sessionStorageService.set('accessInfo', accessResponse);
          this.sessionStorageService.set('authToken', accessResponse.authToken);
          this.sessionStorageService.set(
            'permissions',
            accessResponse.permissions
          );
        })
      );
  }

  logout(): void {
    this.sessionStorageService.remove('accessInfo');
    this.sessionStorageService.remove('authToken');
    this.sessionStorageService.remove('permissions');
    this.router.navigate(['/login']).then();
  }
}
