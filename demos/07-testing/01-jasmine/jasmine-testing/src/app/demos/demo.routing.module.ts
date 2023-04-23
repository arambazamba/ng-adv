import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AsyncComponent } from './samples/component-async/async.component';
import { ComponentClassComponent } from './samples/component-class/component-class.component';
import { ComponentEventsComponent } from './samples/component-events/component-events.component';
import { IntegrationTestComponent } from './samples/component-integration/integration-test.component';
import { MarblesComponent } from './samples/component-marbles/marbles.component';
import { ComponentTestComponent } from './samples/component-test/component-test.component';
import { ComponentWriteComponent } from './samples/component-write/component-write.component';
import { CypressComponent } from './samples/cypress/cypress.component';
import { DirectiveHostComponent } from './samples/directive/directive-host/directive-host.component';
import { HttpTestsBsComponent } from './samples/http-tests-bs/http-tests-bs.component';
import { HttpTestsComponent } from './samples/http-tests/http-tests.component';
import { UnitTestingComponent } from './samples/intro-unit-testing/unit-testing.component';
import { MaterialAsyncComponent } from './samples/material-async/material-async.component';
import { MaterialComponent } from './samples/material/material.component';
import { MockStoreComponent } from './samples/mock-store/mock-store.component';
import { MockHostComponent } from './samples/component-mocking/mock-host/mock-host.component';
import { SpyHostComponent } from './samples/component-mocking/spy-host/spy-host.component';
import { NgrxMockstoreComponent } from './samples/ngrx-mockstore/ngrx-mockstore.component';
import { NgrxReducersComponent } from './samples/ngrx-reducers/ngrx-reducers.component';
import { NgrxSelectorsComponent } from './samples/ngrx-selectors/ngrx-selectors.component';
import { TestPipeComponent } from './samples/pipe/test-pipe.component';
import { SimpleServiceComponent } from './samples/simple-service/simple-service.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'testing-intro', component: UnitTestingComponent },
      { path: 'component-events', component: ComponentEventsComponent },
      { path: 'component-write', component: ComponentWriteComponent },
      { path: 'testpipe', component: TestPipeComponent },
      { path: 'directive', component: DirectiveHostComponent },
      { path: 'simpleservice', component: SimpleServiceComponent },
      { path: 'component-test', component: ComponentTestComponent },
      { path: 'integrationtests', component: IntegrationTestComponent },
      { path: 'mock', component: MockHostComponent },
      { path: 'httptests', component: HttpTestsComponent },
      { path: 'httptests-bs', component: HttpTestsBsComponent },
      { path: 'async', component: AsyncComponent },
      { path: 'material-async', component: MaterialAsyncComponent },
      { path: 'material', component: MaterialComponent },
      { path: 'marbles', component: MarblesComponent },
      { path: 'mockstore', component: MockStoreComponent },
      { path: 'cypress', component: CypressComponent },
      { path: 'component-class', component: ComponentClassComponent },
      { path: 'spy', component: SpyHostComponent },
      { path: 'ngrx-mock-store', component: NgrxMockstoreComponent },
      { path: 'ngrx-selectors', component: NgrxSelectorsComponent },
      { path: 'ngrx-reducers', component: NgrxReducersComponent },
    ],
  },
];
