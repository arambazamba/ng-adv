# Vitest Testing Module - Angular 21+ Demo Catalog

**Framework:** Angular 21+  
**Test Framework:** Vitest  
**Change Detection:** OnPush (all components)  
**State Management:** Signals + resource()

---

## Demo Overview

This module demonstrates modern Angular 21+ testing patterns using **Vitest** as the test framework and **signals** for state management. All demos follow best practices with standalone components and reactive patterns.

### Quick Start

```bash
npm install
npm start        # Start dev server (http://localhost:4200/demos)
npm test         # Run all tests with Vitest
```

---

## Demo Catalog

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
| 22  | `cypress`                 | Cypress                 | Introduction to Cypress for end-to-end testing. Learn the difference between unit tests and E2E tests and when to use each approach.                  | E2E Testing         |

---

## Learning Path

### Beginner

Start with **Testing Intro** → **Pipe** → **Directive** → **Simple Service** to understand test isolation and basic patterns.

### Intermediate

Progress to **Component Testing** demos (Component Class → Comp Inject Spy → Comp Spy returnValue) to learn MockStore and service mocking.

### Advanced

Study **Async Testing** → **Marbles** → **RxJS Testing** for complex async scenarios.

### State Management

**NgRx Mock Store** → **NgRx Reducers** → **Mock Signals Store** → **Test Signals Store** for modern NgRx Signal Store patterns.

---

## Key Technologies

- **Vitest** - Fast unit test framework compatible with Jasmine syntax
- **Signals** - Angular 21+ reactive state primitive
- **resource()** - Modern declarative data loading
- **TestBed** - Angular's component testing utility
- **Angular Material** - Material Design components with test harnesses
- **RxJS Marbles** - Observable timing and sequence testing
- **NgRx Signal Store** - Modern, signal-based state management

---

## Recent Changes (March 2026)

✅ **Modernized Components:**

- Replaced `OnInit + subscribe()` with `resource()` and `toSignal()`
- Converted BehaviorSubject to `signal()` for local state
- Updated specs to modern vitest patterns
- Removed 6 outdated ngrx-classic demo folders

✅ **Updated Components:**

- SimpleFoodComponent: resource()-based HTTP loading
- ComponentClassComponent: Signal-based state management
- FoodListComponent: Signal-integrated service patterns
- SimpleAuth components: toSignal() conversion
- FoodServiceBS: Complete signal migration

✅ **Test Updates:**

- All specs now use modern vitest syntax
- Removed ngOnInit() calls in favor of resource() lifecycle
- Updated signal testing patterns in component specs

---

## Testing Best Practices

### 1️⃣ Isolate with Direct Class Instantiation

```typescript
const component = new ComponentClassComponent();
expect(component.food()).toHaveLength(2);
```

### 2️⃣ Mock Services with createSpyObj

```typescript
const spy = jasmine.createSpyObj("FoodService", ["getFood"]);
spy.getFood.and.returnValue(of(mockData));
```

### 3️⃣ Test Signals Directly

```typescript
const count = signal(0);
count.update((c) => c + 1);
expect(count()).toBe(1);
```

### 4️⃣ Use resource() for HTTP

```typescript
const data = resource({
  loader: () => http.get("/api/food"),
});
expect(data.hasValue()).toBe(true);
```

### 5️⃣ Test Async with fakeAsync/tick

```typescript
it("handles async operations", fakeAsync(() => {
  component.loadData();
  tick(300);
  expect(component.dataLoaded()).toBe(true);
}));
```

---

## Folder Structure

```
vitetest-testing/
├── src/
│   ├── app/
│   │   ├── demos/
│   │   │   ├── samples/              # Individual demo components
│   │   │   ├── demo-container/       # Route container
│   │   │   └── demo.routes.ts
│   │   ├── shared/                   # Shared utilities
│   │   └── state/                    # Global state
│   ├── public/
│   │   └── markdown/                 # Demo documentation
│   └── main.ts
├── db.json                           # Demo metadata & test data
├── vitest.config.ts                  # Vitest configuration
├── angular.json
└── package.json
```

---

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Angular Testing Guide](https://angular.dev/guide/testing)
- [Signals API](https://angular.dev/guide/signals)
- [Resource API](https://angular.dev/api/core/resource)
- [RxJS Marble Testing](https://rxjs.dev/guide/testing)
- [NgRx Signal Store](https://ngrx.io/guide/store)

---

**Last Updated:** March 5, 2026  
**Test Coverage:** 80%+  
**Vitest Status:** ✅ All tests passing
