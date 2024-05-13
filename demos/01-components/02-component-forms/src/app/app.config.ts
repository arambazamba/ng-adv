import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { routes } from './app.routes';

const appearance: MatFormFieldDefaultOptions = {
    appearance: 'outline',
};

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideRouter(routes),
        provideAnimations(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: appearance,
        },
        importProvidersFrom(
            MarkdownModule.forRoot()
        )
    ],
};