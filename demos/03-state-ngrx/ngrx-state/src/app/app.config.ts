import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoadingInterceptor } from './shared/loading/loading-interceptor';
import { LoadingService } from './shared/loading/loading.service';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore, provideState } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { demoState } from './demos/state/demos.state';
import { appState } from './state/app.state';
import { DefaultDataServiceConfig, provideEntityData, withEffects } from '@ngrx/data';
import { customerState } from './customers/state/customers.state';
import { skillsEntityConfig } from './skills/skills.metadata';
import { skillsDataServiceConfig } from './skills/skills-data.service.config';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes),
        provideAnimations(),
        //NgRx
        provideStore({ demos: demoState.reducer }),
        provideEffects(),
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
    ]
};