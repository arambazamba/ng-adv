import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SimpleAuthTwoService } from './simple-auth-two.service';

// json-server is not configured to handle authentication 
// to avoid errors we add: 
// req.url.includes(environment.api) == false
export const authInterceptor: HttpInterceptorFn = (req, next,) => {
  const auth = inject(SimpleAuthTwoService);
  if (auth.isAuthenticated && req.url.includes(environment.api) == false) {
    console.log('adding auth header', auth.authToken)
    const modifiedRequest = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + auth.authToken
      ),
    });
    return next(modifiedRequest);
  } else {
    console.log('Http-Error', 'You must be logged in to ...');
  }
  return next(req);
};
