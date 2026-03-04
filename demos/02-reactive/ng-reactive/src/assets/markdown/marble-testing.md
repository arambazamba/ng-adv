- Examine Marble Testing Code in `marble-testing.component.spec.ts`:

  ```javascript
  it("test with operator", () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const source$ = cold("a--b-c|", { a: 1, b: 3, c: 5 });
      const piperesult$ = source$.pipe(map((v) => v * 10));
      const expected = "a--b-c|";
      expectObservable(piperesult$).toBe(expected, { a: 10, b: 30, c: 50 });
    });
  });
  ```

<div alt="marble testing" style="width: 100%;text-align: center;"><img src="assets/images/marbles.jpg"></div>

---

## 2026 Context

RxJS remains important for library integration and reactive patterns. Use Signals for application state (Module 03), HttpResource for HTTP requests, and SignalStore for complex state (Module 05).
