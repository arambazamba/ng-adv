import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { MarkdownModule } from 'ngx-markdown';
import { initFactory, AppInitService } from './app-init/app-init.service';
import { configFactory } from './app-init/config.factory';
import { ConfigService } from './app-init/config.service';
import { GlobalErrService } from './error/global-err-handler';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { provideStore, provideState } from '@ngrx/store';
import { appState } from './state/app.state';
import { customerState } from './customers/state/customers.state';
import { provideEffects } from '@ngrx/effects';
import * as customerEffects from './customers/state/customers.effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideRouter(appRoutes),
        provideAnimations(),
        importProvidersFrom(
            MarkdownModule.forRoot(),
        ),
        // NgRx
        provideStore(),
        provideState(appState),
        provideState(customerState),
        provideEffects(customerEffects),
        // Application Init
        {
            provide: APP_INITIALIZER,
            useValue: () => {
                console.log('App init running');
            },
            multi: true,
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initFactory,
            deps: [AppInitService],
            multi: true,
        },
        {
            provide: APP_INITIALIZER,
            useFactory: configFactory,
            deps: [ConfigService],
            multi: true,
        },
        {
            provide: ErrorHandler,
            useClass: GlobalErrService,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        },
    ]
};