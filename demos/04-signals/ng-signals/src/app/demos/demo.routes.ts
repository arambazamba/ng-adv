import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { NgrxSignalsComponent } from './samples/ngrx-signals/ngrx-signals.component';
import { SignalsBasicsComponent } from './samples/signals-basics/signals-basics.component';
import { SignalsEventBusComponent } from './samples/signals-event-bus/signals-event-bus.component';
import { RxjsInteropComponent } from './samples/rxjs-interop/rxjs-interop.component';
import { SelectSignalComponent } from './samples/select-signal/select-signal.component';
import { SignalInputsComponent } from './samples/signal-inputs/signal-inputs.component';
import { ContainerPresenterSignalsComponent } from './samples/container-presenter/container-presenter-signals.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'signals-basics', component: SignalsBasicsComponent },
      { path: 'rxjs-interop', component: RxjsInteropComponent },
      { path: 'signals-event-bus', component: SignalsEventBusComponent },
      { path: 'select-signal', component: SelectSignalComponent },
      { path: 'ngrx-signals', component: NgrxSignalsComponent },
      { path: 'signal-inputs', component: SignalInputsComponent },
      { path: 'container-presenter', component: ContainerPresenterSignalsComponent }
    ],
  },
];
