# Test Signal Store — markdownEditorStore

Test the markdownEditorStore directly by dispatching events via the NgRx Dispatcher.

## Spec file

## Key Concepts
- Inject the store and Dispatcher directly in TestBed
- Mock the service with vi.fn() returning of(data) observables
- TestBed.flushEffects() triggers onInit hooks and event handlers
- Dispatch events manually to drive withReducer state transitions
- Assert store.entities(), store.isLoading(), store.error() after dispatch
