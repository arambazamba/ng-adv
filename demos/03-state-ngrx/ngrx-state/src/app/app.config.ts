import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { DefaultDataServiceConfig, provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MarkdownModule } from 'ngx-markdown';
import { appRoutes } from './app.routes';
import * as customerEffects from './customers/state/customers.effects';
import { customerState } from './customers/state/customers.state';
import * as demoEffects from './demos/state/demos.effects';
import { demoState } from './demos/state/demos.state';
import { LoadingInterceptor } from './shared/loading/loading-interceptor';
import { LoadingService } from './shared/loading/loading.service';
import { skillsDataServiceConfig } from './skills/skills-data.service.config';
import { skillsEntityConfig } from './skills/skills.metadata';
import { appState } from './state/app.state';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(appRoutes),
        provideAnimations(),
        //NgRx
        provideStore(),
        provideEffects(demoEffects),
        provideEffects(customerEffects),
        //State Slices
        provideState(appState),
        provideState(demoState),
        provideState(customerState),
        //NgRx Data
        provideEntityData(skillsEntityConfig, withEffects()),
        { provide: DefaultDataServiceConfig, useValue: skillsDataServiceConfig },
        //NgRx DevTools
        provideStoreDevtools({ maxAge: 25 }),
        LoadingService,
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
        //Markdown
        importProvidersFrom(
            MarkdownModule.forRoot(),
        )
    ]
};