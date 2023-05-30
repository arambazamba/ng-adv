## Load config using a ConfigService - Optional

This is a simple Angular app that loads it's configuration from a `config.json` file. The configuration is injected into the app using a Config Service.

```typescript
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  http = inject(HttpClient);
  cfg = new BehaviorSubject<AppConfig | null>(null);
  apiUrl = this.cfg.asObservable().pipe(
    filter((cfg) => !!cfg),
    map((cfg) => cfg?.apiUrl)
  );

  loadConfig() {
    this.http.get<AppConfig>('./assets/config.json')
      .subscribe((config: AppConfig) => {
        this.cfg.next(config);
        console.log('config loaded :', this.cfg);
      });
  }
}
```

app.module.ts:
```typescript
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
  ...

  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true,
    },
```