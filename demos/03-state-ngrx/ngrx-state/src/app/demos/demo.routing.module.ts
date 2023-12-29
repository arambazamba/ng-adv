import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AppStateComponent } from './samples/app-state/app-state.component';
import { ChangeDetectionProfileComponent } from './samples/change-detection-profile/change-detection-profile.component';
import { ChangeDetectionComponent } from './samples/change-detection/change-detection.component';
import { ChangeDetectorRefComponent } from './samples/change-detector-ref/change-detector-ref.component';
import { ComponentStoreComponent } from './samples/component-store/component-store.component';
import { ContainerPresenterNgrxComponent } from './samples/container-presenter-ngrx/container-presenter-ngrx.component';
import { EffectsComponent } from './samples/effects/effects.component';
import { FacadesComponent } from './samples/facades/facades.component';
import { FeatureModuleStateComponent } from './samples/feature-module-state/feature-module-state.component';
import { NgrxDataComponent } from './samples/ngrx-data/ngrx-data.component';
import { NgrxEntityComponent } from './samples/ngrx-entity/ngrx-entity.component';
import { NgrxSignalsComponent } from './samples/ngrx-signals/ngrx-signals.component';
import { CreateFeatureComponent } from './samples/create-feature/create-feature.component';
import { DispatchActionComponent } from './samples/dispatch-action/dispatch-action.component';
import { RespondToEffectsComponent } from './samples/respond-to-effects/respond-to-effects.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'app-state', component: AppStateComponent, title: 'Demos - App State' },
      { path: 'dispatch-action', component: DispatchActionComponent, title: 'Demos - Dispatch Action' },
      { path: 'respond-effects', component: RespondToEffectsComponent, title: 'Demos - Respond Effects' },
      { path: 'ngrx-entity', component: NgrxEntityComponent, title: 'Demos - Ngrx Entity' },
      { path: 'feature-modules-state', component: FeatureModuleStateComponent, title: 'Demos - Feature Modules State' },
      { path: 'create-feature', component: CreateFeatureComponent, title: 'Demos - createFeature' },
      { path: 'effects', component: EffectsComponent, title: 'Demos - Effects' },
      { path: 'facades', component: FacadesComponent, title: 'Demos - Facades' },
      { path: 'ngrx-data', component: NgrxDataComponent, title: 'Demos - Ngrx Data' },
      { path: 'ngrx-signals', component: NgrxSignalsComponent, title: 'Demos - Ngrx Signals' },
      { path: 'cd-intro', component: ChangeDetectionComponent, title: 'Demos - Change Detection' },
      { path: 'cd-profile', component: ChangeDetectionProfileComponent, title: 'Demos - Change Detection Profile' },
      { path: 'component-store', component: ComponentStoreComponent, title: 'Demos - Component Store' },
      { path: 'presenter-ngrx', component: ContainerPresenterNgrxComponent, title: 'Demos - Container Presenter Ngrx' },
      {
        path: 'change-detector-ref',
        component: ChangeDetectorRefComponent,
        title: 'Demos - Change Detector Ref',
      }
    ],
  },
];
