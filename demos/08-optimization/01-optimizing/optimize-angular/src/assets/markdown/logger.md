- Examine ngx-logger config in demos.module.ts

  ```typescript
  LoggerModule.forRoot({
    serverLoggingUrl: 'http://localhost:3000/logs',
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.ERROR
  }),
  ```

- Examine `index.ts` and the use of the `logNgRX-function`. You could also use the `logNgRX` function to log the state to the server:

  ```typescript
  export function logNgRX(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
      console.log('ngrx', action.type);
      return reducer(state, action);
    };
  }
  ```
