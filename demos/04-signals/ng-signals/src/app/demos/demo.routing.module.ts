import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { NgrxSignalsComponent } from './samples/ngrx-signals/ngrx-signals.component';
import { SignalsBasicsComponent } from './samples/signals-basics/signals-basics.component';
import { SignalsEventBusComponent } from './samples/signals-event-bus/signals-event-bus.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'signals-basics', component: SignalsBasicsComponent },
      { path: 'signals-eventbus', component: SignalsEventBusComponent },
      { path: 'ngrx-signals', component: NgrxSignalsComponent },
    ],
  },
];
