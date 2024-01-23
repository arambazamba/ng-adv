Examine the intercept method in `firebase.interceptor.ts` which is registered in `demos.module.ts`.  The interceptor adds the Bearer token to the request header if the token is not empty.  The token is taken from `firebase-auth.service.ts`

```typescript
public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
  if (this.token != '') {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${this.token}` },
    });
    console.log('Interceptor added Bearer Token for request', cloned);
    return next.handle(cloned);
  } else {
    return next.handle(req);
  }
}
```

The interceptor is registered in `demo.module.ts`:

```typescript
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirebaseInterceptor,
      multi: true,
    },
  ],
```
