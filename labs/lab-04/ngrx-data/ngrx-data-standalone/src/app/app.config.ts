import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEntityData, withEffects } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideEntityData(entityConfig, withEffects())
  ]
};
