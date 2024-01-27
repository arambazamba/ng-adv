import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { MarkdownEditorComponent } from '../shared/markdown-editor/markdown-editor.component';
import { MarkdownRendererModule } from '../shared/markdown-renderer/markdown-renderer.module';

import { DemoContainerComponent } from './demo-container/demo-container.component';
import { ActionStreamsComponent } from './samples/action-streams/action-streams.component';
import { AsyncPipeComponent } from './samples/async-pipe/async-pipe.component';
import { CombiningComponent } from './samples/combining/combining.component';
import { CreatingObservableComponent } from './samples/creating-observables/creating-observable.component';
import { CustomOperatorsComponent } from './samples/custom-operators/custom-operators.component';
import { DebouncedSearchComponent } from './samples/debounced-search/debounced-search.component';
import { DestroyRefComponent } from './samples/destroy-ref/destroy-ref.component';
import { ErrHandlingComponent } from './samples/err-handling/err-handling.component';
import { EventBusComponent } from './samples/eventbus/eventbus.component';
import { FormControlComponent } from './samples/form-control/form-control.component';
import { ImperativeComponent } from './samples/imperative/imperative.component';
import { LangFeaturesComponent } from './samples/lang-features/lang-features.component';
import { MarbleTestingComponent } from './samples/marble-testing/marble-testing.component';
import { MouseDomObservablesComponent } from './samples/mouse-dom-observables/mouse-dom-observables.component';
import { OperatorsComponent } from './samples/operators/operators.component';
import { ReifiedReactiveComponent } from './samples/reified-reactive/reified-reactive.component';
import { DemoRowComponent } from './samples/statefull/demo-row/demo-row.component';
import { KpiComponent } from './samples/statefull/kpi/kpi.component';
import { ListComponent } from './samples/statefull/list/list.component';
import { StatefulComponent } from './samples/statefull/stateful.component';
import { SubjectsComponent } from './samples/subjects/subjects.component';
import { TakeUntilDestroyedComponent } from './samples/take-until-destroyed/take-until-destroyed.component';
import { TransformationComponent } from './samples/transformation/transformation.component';
import { SignPadComponent } from './samples/unsubscribing/sign-pad/sign-pad.component';
import { UnsubscribingComponent } from './samples/unsubscribing/unsubscribing.component';
import { ResponsiveScreenComponent } from './samples/responsive-screen/responsive-screen.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'responsive-screen', component: ResponsiveScreenComponent },
      { path: 'langfeatures', component: LangFeaturesComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'imperative', component: ImperativeComponent },
      { path: 'reactive', component: ReifiedReactiveComponent },
      { path: 'creating', component: CreatingObservableComponent },
      { path: 'mousedomobs', component: MouseDomObservablesComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'debounced', component: DebouncedSearchComponent },
      { path: 'unsubscribe', component: UnsubscribingComponent },
      { path: 'asyncpipe', component: AsyncPipeComponent },
      { path: 'customops', component: CustomOperatorsComponent },
      { path: 'errhandling', component: ErrHandlingComponent },
      { path: 'combining', component: CombiningComponent },
      { path: 'transformation', component: TransformationComponent },
      { path: 'actionstreams', component: ActionStreamsComponent },
      { path: 'marble-testing', component: MarbleTestingComponent },
      { path: 'statefull', component: StatefulComponent },
      { path: 'ebus', component: EventBusComponent }
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    HttpClientModule,
    MarkdownRendererModule,
    MarkdownEditorComponent,
    DemoContainerComponent,
    FormControlComponent,
    CreatingObservableComponent,
    MouseDomObservablesComponent,
    DebouncedSearchComponent,
    OperatorsComponent,
    UnsubscribingComponent,
    SubjectsComponent,
    CustomOperatorsComponent,
    AsyncPipeComponent,
    ErrHandlingComponent,
    CombiningComponent,
    ActionStreamsComponent,
    LangFeaturesComponent,
    TransformationComponent,
    MarbleTestingComponent,
    SignPadComponent,
    ImperativeComponent,
    ReifiedReactiveComponent,
    StatefulComponent,
    EventBusComponent,
    ListComponent,
    KpiComponent,
    DemoRowComponent,
    DestroyRefComponent,
    TakeUntilDestroyedComponent,
    ResponsiveScreenComponent
  ],
  providers: [],
})
export class DemosModule { }
