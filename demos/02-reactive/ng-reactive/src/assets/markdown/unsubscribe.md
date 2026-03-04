- Examine `async-pipe.component.ts` and its use of `ngOnDestroy`and the `taskSubscription`.
- Examine `take-until-destroyed.component.ts` and how it unsubscribes from the observable when the component is destroyed.
- This is a recommended pattern when dealing with multiple subscriptions in a component.

---

## 2026 Context

RxJS remains important for library integration and reactive patterns. Use Signals for application state (Module 03), HttpResource for HTTP requests, and SignalStore for complex state (Module 05).
