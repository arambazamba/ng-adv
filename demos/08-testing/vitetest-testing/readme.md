# Vitest Testing Module - Angular 21+ Demo Catalog

# Vitest Testing Module - Angular 21+ Demo Catalog

| #   | Route                     | Title                        | Teaches                                                                                                                               | Topic               |
| --- | ------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| 1   | `testing-intro`           | Hello World Test             | Write your first Vitest unit test. Understand describe/it blocks, assertions with expect, and beforeEach setup.                       | Introduction        |
| 2   | `pipe`                    | Test Pipe                    | Unit test Angular pipes in isolation by instantiating the pipe class directly and asserting transform output.                         | Pipes & Directives  |
| 3   | `directive`               | Test Directive               | Test attribute directives by creating a host component in TestBed and asserting DOM changes caused by the directive.                  | Pipes & Directives  |
| 4   | `http-tests`              | Service HTTP Test            | Test CustomersService CRUD operations using HttpTestingController. Flush mock responses and verify request URLs, methods, and bodies. | Services            |
| 5   | `http-tests-signal`       | httpResource Test            | Test a component that uses Angular's httpResource() for reactive data fetching. Use HttpTestingController to flush responses.         | Services            |
| 6   | `spy`                     | Comp Spy — Customers         | Test CustomersComponent by providing a mock customersStore signal object. Use vi.fn() spies to assert store method calls.             | Component Testing   |
| 7   | `component-write`         | Comp DOM Test                | Test CustomersTableComponent DOM output using setInput() for signal inputs. Query mat-row and mat-cell elements.                      | Component Testing   |
| 8   | `component-events`        | Comp Interaction — Customers | Test CustomersComponent interactions by triggering user events and asserting component method calls and DOM updates.                  | Component Testing   |
| 9   | `component-test`          | Comp CRUD — Customers        | Test SimpleCustomersComponent which uses Angular's resource() API for data loading. Spy on CustomersService interactions.             | Component Testing   |
| 10  | `component-input-signals` | Input Signals & Outputs      | Test CustomerEditComponent using fixture.componentRef.setInput() to set required signal inputs and verify outputs.                    | Component Testing   |
| 11  | `material`                | Material Harness             | Test CustomersTableComponent using Angular Material test harnesses (MatTableHarness, MatButtonHarness).                               | Component Testing   |
| 12  | `async`                   | Comp Async — Customers       | Test asynchronous loading in CustomersComponent using fakeAsync/tick. Verify progress bar and rendered rows.                          | Async Testing       |
| 13  | `integration-tests`       | Container / Presenter        | Integration-test CustomersComponent (container) with real child components. Verify signal data flow across the tree.                  | Integration Testing |
| 14  | `mock-signals-store`      | Mock Signal Store            | Mock the markdownEditorStore in component tests by providing a fake store object with signal properties.                              | NgRx Testing        |
| 15  | `test-signals-store`      | Test Signal Store            | Test the markdownEditorStore directly by dispatching events via the Dispatcher. Verify state transitions.                             | NgRx Testing        |
| 16  | `simple-service`          | Simple Service               | Test a service class without DI by instantiating it directly. Verify add, delete and clear methods and state mutations.               | Introduction        |
| 17  | `component-class`         | Class-Only Test              | Test component signal state by instantiating the class directly without TestBed. Fast tests for pure logic.                           | Component Testing   |
| 18  | `material-async`          | Material Async               | Combine Material test harnesses with async/await to interact with Material components that have asynchronous rendering.               | Async Testing       |
| 19  | `playwright`              | Playwright E2E               | Write end-to-end tests with Playwright using the Page Object Model and fixtures. Reset API state between tests.                       | E2E Testing         |

## Playwright Tests

End-to-end tests for the Customers feature live in [`e2e/`](e2e/).

| File                       | Purpose                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------- |
| `customers.fixture.ts`     | `CustomersPage` POM + `test` fixture that resets json-server data before each test |
| `customers.spec.ts`        | 12 fixture-based tests covering table load, edit, delete, and add                  |
| `customers.interaction.ts` | Sequential interaction script mirroring manual browser exploration                 |

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
