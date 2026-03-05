# Comp Async — CustomersComponent

Test asynchronous loading behaviour using fakeAsync and tick.

## Spec file

## Key Concepts
- fakeAsync wraps the test and gives synchronous control over timers
- tick() advances the virtual clock to process pending microtasks
- Use writable signals in the fake store to simulate state changes
- Call detectChanges() after every signal mutation
