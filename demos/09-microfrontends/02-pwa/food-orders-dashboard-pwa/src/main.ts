import { bootstrapApplication } from '@angular/platform-browser';
import { OrdersComponent } from './app/orders.component';
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';

bootstrapApplication(OrdersComponent, {
    providers: [provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
        })]
}).catch((err) => console.error(err));
