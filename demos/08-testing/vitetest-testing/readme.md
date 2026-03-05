# Vitest Testing Module - Angular 21+ Demo Catalog

| #   | Route                     | Title                   | Teaches                                                                                                                                               | Topic               |
| --- | ------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| 1   | `testing-intro`           | Testing Intro           | Set up Vitest with Angular and write your first unit test. Understand test structure with describe/it blocks and basic assertions.                    | Introduction        |
| 2   | `pipe`                    | Test Pipe               | Unit test Angular pipes in isolation by instantiating the pipe class directly and asserting transform output.                                         | Pipes & Directives  |
| 3   | `directive`               | Test Directive          | Test attribute directives by creating a host component in TestBed and asserting DOM changes caused by the directive.                                  | Pipes & Directives  |
| 4   | `simple-service`          | Simple Service          | Test a service class without DI by instantiating it directly. Verify methods and state mutations in isolation.                                        | Services            |
| 5   | `http-tests`              | Service Http            | Test Angular services that use HttpClient with HttpTestingController. Flush mock responses and verify request URLs and methods.                       | Services            |
| 6   | `http-tests-bs`           | Service BS Http         | Test a service that uses BehaviorSubject for local state alongside HttpClient. Verify Observable emissions and state management.                      | Services            |
| 7   | `component-class`         | Comp Test Class         | Test component logic by instantiating the class directly (no TestBed). Fast and simple for components without template dependencies.                  | Component Testing   |
| 8   | `spy`                     | Comp Inject Spy         | Use jasmine.createSpyObj to mock injected services in TestBed. Verify component behaviour when the service spy returns specific values.               | Component Testing   |
| 9   | `component-test`          | Comp Spy returnValue    | Mock a service dependency in TestBed with createSpyObj and .and.returnValue to control Observable outputs. Assert DOM state and service interactions. | Component Testing   |
| 10  | `component-write`         | Comp Write / Read DOM   | Write to signal state and read DOM output after detectChanges. Use nativeElement queries to assert rendered text and attributes.                      | Component Testing   |
| 11  | `component-events`        | Comp Events             | Trigger DOM events and verify signal output emissions. Use fixture.debugElement to dispatch synthetic events and assert component reactions.          | Component Testing   |
| 12  | `component-input-signals` | Comp Input Signals      | Set signal inputs on a component under test using fixture.componentRef.setInput(). Assert rendered output and required input validation.              | Component Testing   |
| 13  | `material`                | Comp Material Harness   | Use Angular Material component test harnesses to interact with Material UI elements in specs without coupling tests to DOM internals.                 | Component Testing   |
| 14  | `async`                   | Comp Async              | Handle async operations in tests using fakeAsync/tick and whenStable. Test components that load data asynchronously.                                  | Async Testing       |
| 15  | `material-async`          | Comp Material Async     | Combine Material test harnesses with async/await to interact with Material components that have asynchronous rendering.                               | Async Testing       |
| 16  | `integration-tests`       | Comp Nested Integration | Write integration tests that render a parent component with real child components. Verify the full component tree without shallow mocking.            | Integration Testing |
| 17  | `marbles`                 | Comp Marbles            | Use RxJS marble testing to assert Observable timing and emission sequences. Ideal for testing services with complex async pipelines.                  | RxJS Testing        |
| 18  | `ngrx-mock-store`         | NgRx Mock Store         | Test NgRx-connected components with MockStore and provideMockStore. Override selectors at test-time without dispatching real actions.                 | NgRx Testing        |
| 19  | `ngrx-reducers`           | NgRx Reducers           | Unit test NgRx reducers as pure functions by passing state and actions directly. Verify state transitions without TestBed.                            | NgRx Testing        |
| 20  | `mock-signals-store`      | Mock Signals Store      | Mock an NgRx Signal Store in component tests by providing a fake store that returns signals. Assert component output based on signal values.          | NgRx Testing        |
| 21  | `test-signals-store`      | Test Signals Store      | Integration-test an NgRx Signal Store with a real service spy. Verify store state changes after calling store methods.                                | NgRx Testing        |
| 22  | `playwright`              | Playwright E2E          | Write end-to-end tests with Playwright using the Page Object Model and fixtures. Reset API state between tests for full isolation.                    | E2E Testing         |

## Playwright Tests

End-to-end tests for the Customers feature live in [`e2e/`](e2e/).

| File | Purpose |
|---|---|
| `customers.fixture.ts` | `CustomersPage` POM + `test` fixture that resets json-server data before each test |
| `customers.spec.ts` | 12 fixture-based tests covering table load, edit, delete, and add |
| `customers.interaction.ts` | Sequential interaction script mirroring manual browser exploration |

### Setup (first time)

```bash
npm install -D @playwright/test
npx playwright install chromium
```

### Running

Requires `ng serve` and `json-server` running in separate terminals.

```bash
# Run all e2e tests (headless)
npx playwright test

# Run with browser visible
npx playwright test --headed

# Interactive UI mode (recommended for debugging)
npx playwright test --ui

# Run a single file
npx playwright test e2e/customers.spec.ts
```
