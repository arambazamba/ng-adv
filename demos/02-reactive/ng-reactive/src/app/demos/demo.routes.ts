import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { ActionStreamsComponent } from './samples/action-streams/action-streams.component';
import { AsyncPipeComponent } from './samples/async-pipe/async-pipe.component';
import { CombiningComponent } from './samples/combining/combining.component';
import { CreatingObservableComponent } from './samples/creating-observables/creating-observable.component';
import { CustomOperatorsComponent } from './samples/custom-operators/custom-operators.component';
import { DebouncedSearchComponent } from './samples/debounced-search/debounced-search.component';
import { ErrHandlingComponent } from './samples/err-handling/err-handling.component';
import { EventBusComponent } from './samples/eventbus/eventbus.component';
import { ImperativeComponent } from './samples/imperative/imperative.component';
import { LangFeaturesComponent } from './samples/lang-features/lang-features.component';
import { MarbleTestingComponent } from './samples/marble-testing/marble-testing.component';
import { MouseDomObservablesComponent } from './samples/mouse-dom-observables/mouse-dom-observables.component';
import { OperatorsComponent } from './samples/operators/operators.component';
import { ReifiedReactiveComponent } from './samples/reified-reactive/reified-reactive.component';
import { ResponsiveScreenComponent } from './samples/responsive-screen/responsive-screen.component';
import { StatefulComponent } from './samples/stateful/stateful.component';
import { SubjectsComponent } from './samples/subjects/subjects.component';
import { TransformationComponent } from './samples/transformation/transformation.component';
import { UnsubscribingComponent } from './samples/unsubscribing/unsubscribing.component';

export const demoRoutes: Routes = [
    {
        path: '',
        component: DemoContainerComponent,
        children: [
            { path: 'responsive-screen', component: ResponsiveScreenComponent },
            { path: 'lang-features', component: LangFeaturesComponent },
            { path: 'subjects', component: SubjectsComponent },
            { path: 'imperative', component: ImperativeComponent },
            { path: 'reactive', component: ReifiedReactiveComponent },
            { path: 'creating', component: CreatingObservableComponent },
            { path: 'mouse-dom', component: MouseDomObservablesComponent },
            { path: 'operators', component: OperatorsComponent },
            { path: 'debounced', component: DebouncedSearchComponent },
            { path: 'unsubscribe', component: UnsubscribingComponent },
            { path: 'async-pipe', component: AsyncPipeComponent },
            { path: 'custom-operators', component: CustomOperatorsComponent },
            { path: 'err-handling', component: ErrHandlingComponent },
            { path: 'combining', component: CombiningComponent },
            { path: 'transformation', component: TransformationComponent },
            { path: 'action-streams', component: ActionStreamsComponent },
            { path: 'marble-testing', component: MarbleTestingComponent },
            { path: 'stateful-service', component: StatefulComponent },
            { path: 'event-bus', component: EventBusComponent }
        ],
    },
];