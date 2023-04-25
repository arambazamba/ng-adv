Examine the `HttpErrorInterceptor` implemented in `globle-http-err-handler.ts` and its registration in `app.module.ts`. The "Do Call" button has a typo in the url to demonstrate the interceptor in action.

```typescript
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
```
