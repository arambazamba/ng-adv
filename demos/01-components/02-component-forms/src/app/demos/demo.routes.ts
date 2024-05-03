import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { BootstrapStandaloneComponent } from './samples/bootstrap-standalone/bootstrap-standalone.component';
import { ReactiveCascadeComponent } from './samples/cascade/reactive-cascade.component';
import { ContainerPresenterComponent } from './samples/container-presenter/container-presenter.component';
import { ContentChildComponent } from './samples/content-child/content-child.component';
import { ContentProjectionComponent } from './samples/content-projection/content-projection.component';
import { ControlFlowComponent } from './samples/control-flow/control-flow.component';
import { ControlValueAccessorComponent } from './samples/control-value-accessor/control-value-accessor.component';
import { DirectiveCompositionComponent } from './samples/directive-composition/directive-composition.component';
import { DynamicComponentsComponent } from './samples/dynamic-components/dynamic-components.component';
import { ErrStateMatcherComponent } from './samples/err-state-matcher/err-state-matcher.component';
import { ReactiveExplicitTypedComponent } from './samples/explicit-typed/reactive-explicit-typed.component';
import { FormArrayComponent } from './samples/form-array/form-array.component';
import { FormControlComponent } from './samples/form-control/form-control.component';
import { FormErrorsComponent } from './samples/form-errors/form-errors.component';
import { FormBuilderComponent } from './samples/forms-builder/forms-builder.component';
import { GetRawValueComponent } from './samples/get-raw-value/get-raw-value.component';
import { HostBindingListenerComponent } from './samples/host-binding-listener/host-binding-listener.component';
import { ReactiveNestedComponent } from './samples/nested-objects/reactive-nested.component';
import { ReactiveFormsComponent } from './samples/reactive-forms/reactive-forms.component';
import { SelectFilterHostComponent } from './samples/select-filter-host/select-filter-host.component';
import { StandaloneComponent } from './samples/standalone/standalone.component';
import { ReactiveValidationComponent } from './samples/state-validators/reactive-validation.component';
import { TemplateVsContainerComponent } from './samples/template-vs-container/template-vs-container.component';
import { TypedNonnullableComponent } from './samples/typed-nonnullable/typed-nonnullable.component';
import { ReactiveTypedComponent } from './samples/typed/reactive-typed.component';
import { ReactiveTypedValidationComponent } from './samples/validaton-intro/reactive-typed-validaton.component';
import { ViewChildComponent } from './samples/view-child/view-child.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'control-flow', component: ControlFlowComponent },
      { path: 'standalone', component: StandaloneComponent },
      {
        path: 'lazy-standalone',
        loadComponent: () =>
          import('./samples/lazy-standalone/lazy-standalone.component').then(
            (c) => c.LazyStandaloneComponent
          ),
      },
      { path: 'standalone-bootstrap', component: BootstrapStandaloneComponent },
      { path: 'value-control', component: ControlValueAccessorComponent },
      { path: 'view-queries', component: ViewChildComponent },
      { path: 'content-child', component: ContentChildComponent },
      { path: 'template-vs-container', component: TemplateVsContainerComponent },
      { path: 'host-binding', component: HostBindingListenerComponent },
      { path: 'reactive-nested', component: ReactiveNestedComponent },
      { path: 'validation-typed', component: ReactiveTypedValidationComponent },
      { path: 'content-projection', component: ContentProjectionComponent },
      { path: 'container-presenter', component: ContainerPresenterComponent },
      { path: 'reactive-forms', component: ReactiveFormsComponent },
      { path: 'custom-controls', component: SelectFilterHostComponent },
      { path: 'form-builder', component: FormBuilderComponent },
      { path: 'form-control', component: FormControlComponent },
      { path: 'form-array', component: FormArrayComponent },
      { path: 'form-errors', component: FormErrorsComponent },
      { path: 'err-state-matcher', component: ErrStateMatcherComponent },
      { path: 'dynamic-components', component: DynamicComponentsComponent },
      { path: 'validation', component: ReactiveValidationComponent },
      { path: 'cascade', component: ReactiveCascadeComponent },
      { path: 'typed-forms', component: ReactiveTypedComponent },
      { path: 'typed-forms-explicit', component: ReactiveExplicitTypedComponent },
      {
        path: 'raw-value',
        component: GetRawValueComponent,
      },
      { path: 'typed-non-nullable', component: TypedNonnullableComponent },
      {
        path: 'directives-composition',
        component: DirectiveCompositionComponent,
      },
    ],
  },
];