import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { LoadingInterceptor } from './app/shared/loading/loading-interceptor';
import { LoadingService } from './app/shared/loading/loading.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    provideHttpClient(),
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    provideAnimations(),
  ]
})
  .catch(err => console.error(err));