- Examine the `*.spec` files in `component-async` folder for modern async testing patterns.

- Key aspects of async component testing in Vitest with TestBed:

**1. async/await for Template Resolution:**

```typescript
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [YourComponent],
    providers: [...]
  }).compileComponents();

  fixture = TestBed.createComponent(YourComponent);
});
```

**2. Waiting for Async Operations:**

```typescript
it("handles async data loading", async () => {
  const service = TestBed.inject(YourService);
  spyOn(service, "getData").and.returnValue(Promise.resolve(data));

  fixture.detectChanges();
  await fixture.whenStable(); // Wait for all async operations

  expect(fixture.nativeElement.textContent).toContain("data");
});
```

**3. Using Vitest Fake Timers (replaces fakeAsync):**

```typescript
import { vi } from "vitest";

it("handles polling with fake timers", () => {
  vi.useFakeTimers();
  const service = TestBed.inject(YourService);

  fixture.detectChanges();
  vi.advanceTimersByTime(5000); // Advance 5 seconds

  expect(service.pollCount).toBe(1);
  vi.useRealTimers();
});
```

**4. Ngrx Select Store Operations:**

```typescript
it("loads data from store", async () => {
  const store = TestBed.inject(Store);
  store.dispatch(new LoadData());

  await fixture.debugElement.query(By.css("data-row")).whenStable();
  fixture.detectChanges();

  expect(fixture.nativeElement.querySelectorAll("data-row")).toBeTruthy();
});
```

- View `advanced-async-patterns.spec.ts` for comprehensive examples of signal-based async testing, polling, chained operations, and concurrent patterns.
