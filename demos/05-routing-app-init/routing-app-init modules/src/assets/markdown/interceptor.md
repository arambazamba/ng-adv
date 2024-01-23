To use multible interceptors go to `app.module.ts` and uncomment to following:

```typescript
import { interceptorProvider } from './interceptors/interceptor-provider';
```

Also change the providers section from:

```typescript
providers:
    [
        { provide: ErrorHandler, useClass: GlobalErrHandler },
        { provide: RouterStateSerializer, useClass: CustomSerializer },
        {
        provide: HTTP_INTERCEPTORS,
        useClass: FBAuthInterceptor,
        multi: true,
        }
    ]
```

to

```typescript
providers:
    [
        { provide: ErrorHandler, useClass: GlobalErrHandler },
        { provide: RouterStateSerializer, useClass: CustomSerializer },
        interceptorProvider
    ]
```
