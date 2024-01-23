Examine `global-err-handler.ts` and its registration in `app.module.ts`:

```typescript
export class GlobalErrService implements ErrorHandler {
  constructor(private injector: Injector) {}
  handleError(error: Error | HttpErrorResponse) {
    const router = this.injector.get(Router);
    console.warn('An error occurred:', error);
    if (error.message) {
      console.warn('Err Message:', error.message);
    }
    router.navigate(['/error'], { state: { data: (error as Error).message } });
```