import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../storage/session-storage.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private readonly sessionStorageService: SessionStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken: string = this.sessionStorageService.get('authToken');
    let modifiedReq = request.clone({
      url: environment.basePath + request.url
    });
    if (!!authToken) {
      modifiedReq = modifiedReq.clone({
        headers: modifiedReq.headers.set('Authorization', `Bearer ${authToken}`)
      });
      return next.handle(modifiedReq);
    }
    return next.handle(modifiedReq);
  }
}
