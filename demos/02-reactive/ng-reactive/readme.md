# Reactive Programming with RxJS

## Curriculum Overview

This module teaches RxJS Observables and reactive patterns as **foundational knowledge for library integration and NgRx state management**. In 2026, Signals are the primary reactive pattern (Module 03), but RxJS knowledge remains essential for:

- Understanding Angular Material, routing, and HTTP libraries
- Integrating third-party Observable-based APIs
- Building effects and patterns that power NgRx Signal Store
- Efficient async data handling

---

## Demo Gallery

| #   | Route                | Title                      | Topic             | Teaches                                                                                                                                                                       |
| --- | -------------------- | -------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | imperative           | Imperative Reactivity      | Foundations       | Understand the limitations of imperative programming with callbacks and mutable state. See how manual subscription management leads to memory leaks and complex control flow. |
| 2   | reactive             | Declarative Reactivity     | Foundations       | Transition to declarative reactive programming with Observables. Let RxJS handle data flow and subscriptions automatically for cleaner, more maintainable code.               |
| 3   | async-pipe           | Async Pipe                 | Foundations       | Use the async pipe to subscribe to Observables directly in templates. Mark components as OnPush for performance and let Angular handle subscription cleanup.                  |
| 4   | unsubscribe          | Unsubscribing              | Foundations       | Prevent memory leaks by properly unsubscribing from Observables. Explore patterns like takeUntil() and subscription management in component lifecycle.                        |
| 5   | subjects             | Subjects                   | Foundations       | Learn about Subjects, a special type of Observable that acts as both observer and observable. Use Subjects to multicast values to multiple subscribers.                       |
| 6   | creating             | Creating Observables       | Foundations       | Create Observables from scratch using of(), from(), interval(), and custom Observable constructors. Understand cold vs hot Observables.                                       |
| 7   | operators            | Base Operators             | Operators         | Master fundamental operators like map(), filter(), reduce(), and forEach(). Transform and filter Observable streams with common operations.                                   |
| 8   | transformation       | Transformation             | Operators         | Use advanced transformation operators like flatMap(), switchMap(), and mergeMap(). Control how nested Observables are flattened into result streams.                          |
| 9   | combining            | Combining Observables      | Operators         | Combine multiple Observable streams using operators like merge(), concat(), combineLatest(), and zip(). Coordinate data from multiple sources efficiently.                    |
| 10  | err-handling         | Error Handling             | Operators         | Handle errors in Observable streams with catchError() and retry(). Recover from failures gracefully and log errors appropriately.                                             |
| 11  | custom-operators     | Custom Operators           | Operators         | Build reusable custom operators with the pipe() pattern. Encapsulate complex transformation logic into composable, shareable utilities.                                       |
| 12  | timer-interval       | Timer & Interval Operators | Operators         | Create time-based streams with interval(), timer(), and delay(). Understand cold observable creation and takeUntilDestroyed for cleanup.                                      |
| 13  | marble-testing       | Marble Testing             | Testing           | Test Observable sequences using marble diagrams and TestScheduler. Verify complex async behavior predictably with visual test notation.                                       |
| 14  | action-streams       | Action Streams             | Patterns for NgRx | Build reactive data flows from user actions using Subjects and operators. Combine multiple action streams for event-driven applications. Foundation pattern for NgRx effects. |
| 15  | debounced            | Debounced Search           | Patterns for NgRx | Implement efficient search with debounceTime() and switchMap() to reduce API calls. Essential pattern for NgRx effects handling user input.                                   |
| 16  | mouse-dom            | Mouse & DOM Events         | Patterns for NgRx | Convert DOM events into Observable streams using fromEvent(). Handle mouse movements, clicks, and other browser events reactively.                                            |
| 17  | responsive-screen    | Responsive Screen          | Patterns for NgRx | React to screen size changes and media queries using Observables. Build responsive layouts that adapt dynamically to viewport dimensions.                                     |
| 18  | event-bus            | Event Bus                  | Patterns for NgRx | Implement a publish-subscribe pattern with Observables. Use an event bus to decouple component communication. Compare with NgRx event-driven patterns.                        |
| 19  | http-with-rxjs       | HTTP + RxJS Integration    | Patterns for NgRx | Use HttpClient with switchMap(), shareReplay(), and distinctUntilChanged(). Write efficient, cancelable HTTP streams. Foundation for NgRx effects.                            |
| 20  | observable-to-signal | Observable → Signal        | Signal Interop    | Convert Observables to signals using toSignal(). Access reactive data synchronously in templates without async pipe. Modern interop pattern.                                  |
| 21  | httpresource-pattern | HttpResource Pattern       | Signal Interop    | Use httpResource() for declarative HTTP data fetching with built-in loading, error, and value states. Modern alternative to Observable-based patterns.                        |
| 22  | subject-to-output    | Subject vs output()        | Signal Interop    | Compare Subject-based event multicasting with Angular output() signals. Understand modern vs legacy patterns for component communication.                                     |

---

## Learning Path

### 1. **Foundations** (6 demos)

Start here to understand reactive concepts and Observable basics.

- Imperative → Declarative comparison
- Template subscription with async pipe
- Memory leak prevention with unsubscribe
- Subjects for multicasting
- Creating Observables
- Cold and hot observable patterns

### 2. **Operators** (7 demos)

Master RxJS operators for data transformation and stream orchestration.

- Fundamental transformations (map, filter, tap, take)
- Advanced transformations (switchMap, mergeMap, flatMap)
- Combining streams and reducing values
- Error recovery and retry logic
- Custom operator composition
- Time-based operations (interval, timer, delay)

### 3. **Testing** (1 demo)

Test Observable behavior predictably.

- Marble diagram testing with TestScheduler

### 4. **Patterns for NgRx** (6 demos)

Real-world patterns that power NgRx Signal Store effects.

- User action streams and event handling
- Search input debouncing with API calls
- DOM and browser event handling
- Responsive reactive design
- Application event buses
- HttpClient with advanced operators (foundation for effects)

### 5. **Signal Interop** (3 demos)

Modern patterns for working with Observables in signal-first Angular.

- Converting Observables to signals
- Declarative HTTP with httpResource()
- Subject vs output() signals

---

## Recommended Study Order

**Absolute Beginners:** Follow the table order (1-6) → (10-15) → (20) → (30-35) → (40-42)

**Coming from NgRx Classic:** Start with Patterns for NgRx (30-35) and Signal Interop (40-42)

**Signal-First Developers:** Jump straight to Signal Interop (40-42), then explore Patterns for NgRx (30-35) as reference

---

## What Changed in 2026

This module was reorganized to support the modern signal-first curriculum:

### ✅ Removed Demos

- **Stateful Service**: Teaches BehaviorSubject state management (deprecated, use SignalStore in Module 05)
- **Request Status Tracking**: Teaches BehaviorSubject state patterns (deprecated, use httpResource() or SignalStore)

### ✅ Reorganized Topics

- Moved operators to standalone section with clear progression
- Grouped "Patterns for NgRx" to show effect-relevant patterns
- Added "Signal Interop" section for Observable↔Signal conversion

### ✅ Updated Demos

- **Action Streams**: Updated description to emphasize NgRx effects foundation
- **HTTP + RxJS**: Reframed as NgRx effects foundation pattern
- **Event Bus**: Positioned as comparison to NgRx architecture
- All demos use modern Angular patterns (OnPush, inject, standalone)

---

## Prerequisite: Module 01-Components

These demos assume familiarity with:

- Standalone components
- `inject()` dependency injection
- OnPush change detection
- `@if`, `@for`, `@switch` control flow

---

## Next Steps: Module 03-Signals

After mastering RxJS concepts here, progress to Module 03 to learn **signal-based reactive state** which is the primary pattern in modern Angular applications.
