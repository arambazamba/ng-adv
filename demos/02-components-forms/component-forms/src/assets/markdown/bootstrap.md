Examine sample `boostrap-standalone` in this modules folder. Do not forget to examine `main.ts`:

```typescript
...
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
```