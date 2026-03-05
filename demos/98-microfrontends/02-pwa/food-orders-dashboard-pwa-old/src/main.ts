import { bootstrapApplication } from '@angular/platform-browser';
import { OrdersComponent } from './app/orders.component';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

bootstrapApplication(OrdersComponent, {
  providers: [provideServiceWorker('ngsw-worker.js', {
              enabled: !isDevMode(),
              registrationStrategy: 'registerWhenStable:30000'
            })]
}).catch((err) => console.error(err));
