import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { HttpUrlGenerator, provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { CustomUrlHttpGenerator } from './skills/custom-url-generator';
import { entityConfig } from './skills/skills.metadata';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideStore(),
        provideEffects(),
        provideEntityData(entityConfig, withEffects()),
        provideStoreDevtools(),
        {
            provide: HttpUrlGenerator,
            useClass: CustomUrlHttpGenerator,
        }
    ]
};