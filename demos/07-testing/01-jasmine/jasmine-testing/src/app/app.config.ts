import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { DefaultDataServiceConfig, provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MarkdownModule } from 'ngx-markdown';
import { appRoutes } from './app.routes';
import * as demoEffects from './demos/state/demos.effects';
import { demoState } from './demos/state/demos.state';
import { skillsDataServiceConfig } from './skills/skills-data.service.config';
import { skillsEntityConfig } from './skills/skills.metadata';
import { appState } from './state/app.state';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideRouter(appRoutes, withComponentInputBinding()),
        provideAnimations(),
        importProvidersFrom(
            MarkdownModule.forRoot(),
        ),
        // NgRx
        provideStore(),
        provideState(appState),
        provideState(demoState),
        provideEffects(demoEffects), // Add demoEffects to the provideEffects function call
        // NgRx Data -> Skills
        provideEntityData(skillsEntityConfig, withEffects()),
        { provide: DefaultDataServiceConfig, useValue: skillsDataServiceConfig },
        //NgRx DevTools
        provideStoreDevtools({ maxAge: 25 }),
        // Application Init
        {
            provide: APP_INITIALIZER,
            useValue: () => { console.log('App init running'); },
            multi: true,
        }
    ]
};