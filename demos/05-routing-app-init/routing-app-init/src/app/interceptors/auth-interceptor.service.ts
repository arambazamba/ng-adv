import { Injectable, inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleAuthTwoService } from './simple-auth-two.service';
import { SnackbarService } from '../shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService {
  auth = inject(SimpleAuthTwoService);
  sns = inject(SnackbarService);

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('AuthInterceptorService');
    if (this.auth.isAuthenticated) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + this.auth.authToken
        ),
      });
    } else {
      this.sns.displayAlert('Problem', 'You must be logged in to ...');
    }

    return next.handle(request);
  }
}
