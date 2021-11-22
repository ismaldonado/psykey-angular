import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private readonly alertService: AlertService) {}

  private static getMessageByErrorType(status: number): string {
    switch (status) {
      case 401:
        return 'Usuario o contraseña incorrecta. Por favor, inténtelo de nuevo';
      default:
        return 'Se ha producido un error en el servidor';
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg;
          if (error.error instanceof ErrorEvent) {
            console.log('Se ha producido un error en el cliente');
            errorMsg = `Error: ${error.error.message}`;
          } else {
            console.log('Se ha producido un error en el servidor');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            this.alertService.openSnackBar(HttpErrorInterceptor.getMessageByErrorType(error.status));
          }
          console.log(errorMsg);
          return throwError(errorMsg);
        })
      );
  }
}
