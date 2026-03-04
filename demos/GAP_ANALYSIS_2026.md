# 2026 Angular Demo Curriculum: Gap Analysis & Proposed Demos

**Date:** March 4, 2026  
**Scope:** All demo modules (01-10)  
**Analysis:** What's taught vs. what's missing for complete 2026 Angular curriculum

---

## Current Module Coverage

### ✅ Existing Modules & Topics

```
Module 01: Components → Standalone components, input/output, signal inputs, OnPush
Module 02: Reactive → RxJS Observables, Subjects, Operators (legacy focus)
Module 03: Signals → signal(), computed(), effect()
Module 04: Signal Forms → Typed forms, validation, FormGroup with signals
Module 05: NGRx Signals → SignalStore, withEntities, custom features
Module 06: Routing → App initialization, resolvers, guards
Module 07: Testing → Vitest, component & service testing
Module 08: Reusability → Libraries, Nx, Web Components
Module 09: Microfrontends → Module Federation, PWA
Module 10: Optimization → SSR, code splitting, bundle analysis
```

---

## 2026 Teaching Gaps & Proposed Demos

### TIER 1: CRITICAL GAPS (Must Add)

#### Gap 1: Observable ↔ Signal Bridge

**Problem:** Students learn Observables (Mod 02) then jump to Signals (Mod 03) with no interop understanding.  
**Impact:** Confusion when encountering Observable-based APIs in real code

**Proposed Demo Location:** New sub-module **02b-Observable-Signal-Interop**

| Demo URL                | Title                         | Teaches                                                   | Code Pattern                               |
| ----------------------- | ----------------------------- | --------------------------------------------------------- | ------------------------------------------ |
| `observable-to-signal`  | toSignal() Conversion         | Convert Observables to signals using `toSignal()`         | `toSignal(observable$, { initialValue })`  |
| `observable-in-compute` | Using RxJS in Computed Values | Subscribe to Observables within computed() signal effects | `computed(() => this.filter(this.data()))` |
| `subject-to-output`     | Subject vs Output Signals     | Multicasting patterns: Subject vs. output() signals       | `output<T>()` emitters vs `Subject<T>`     |

**Example Components:**

```typescript
// observable-to-signal
readonly users = toSignal(
  this.http.get<User[]>('/api/users'),
  { initialValue: [] }
);

// observable-in-compute
readonly filtered = computed(() =>
  this.users().filter(u => u.name.includes(this.search()))
);

// subject-to-output
readonly userSelected = output<User>();
// vs old way: private userSelected$ = new Subject<User>();
```

---

#### Gap 2: HttpResource Pattern (Declarative HTTP + Loading States)

**Problem:** Students learn HttpClient (imperative) then jump to SignalStore (complex). Missing: Declarative HTTP with built-in loading/error states.  
**Impact:** Most student code ends up using `toSignal(http.get())` instead of proper `httpResource()`

**Proposed Demo Location:** New mini-module **04b-HttpResource-Patterns**

| Demo URL                  | Title                        | Teaches                                              | Concepts                                        |
| ------------------------- | ---------------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| `httpresource-basic`      | HttpResource Basics          | Declarative data loading with built-in request state | `resource()`, `httpResource()`, loading signals |
| `httpresource-pagination` | Pagination with HttpResource | Sync pagination state with HTTP requests             | Smart request objects, derived signals          |
| `httpresource-search`     | Search with Debounce         | Debounced search + auto-loading using httpResource   | Request dependencies, reactive filtering        |
| `httpresource-caching`    | Request Caching Strategy     | Implement smart caching with signals + httpResource  | Computed cache keys, stale-while-revalidate     |

**Example Components:**

```typescript
// httpresource-basic
readonly users = resource({
  request: () => ({ page: this.page() }),
  loader: ({ request }) => this.http.get<User[]>(
    `/api/users?page=${request.page}`
  )
});

// In template:
@if (users.isLoading()) { <spinner /> }
@else {
  @for (user of users.data(); track user.id) {
    <user-card [user]="user" />
  }
}
```

---

#### Gap 3: Signal Effects & Side Effects Patterns

**Problem:** Students know `computed()` for derived state, but unclear when/how to use `effect()` for side effects.  
**Impact:** Misuse of effects; subscriptions that should be auto-cleanup not working correctly

**Proposed Demo Location:** **03b-Signal-Effects-Advanced**

| Demo URL            | Title                      | Teaches                                        | Use Case                               |
| ------------------- | -------------------------- | ---------------------------------------------- | -------------------------------------- |
| `effect-cleanup`    | Proper Cleanup in Effects  | Using `effect()` with proper resource cleanup  | DestroyRef, subscription management    |
| `effect-debounce`   | Debounced Effects          | Debounce user input and trigger side effects   | Combining effect() with RxJS operators |
| `effect-write-back` | Write-back to AsyncStorage | Persist signal state to localStorage/IndexedDB | Delayed persistence, batching updates  |
| `effect-logging`    | Request Logging Effects    | Log signal state changes for analytics         | Timing, conditional logging            |

**Example Code:**

```typescript
// effect-cleanup
effect((onCleanup) => {
  const subscription = this.timer$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(v => this.counter.set(v));

  onCleanup(() => subscription.unsubscribe());
});

// effect-write-back
effect(() => {
  const data = this.formData();
  localStorage.setItem('draft', JSON.stringify(data));
});
```

---

#### Gap 4: SignalStore Custom Features & Composition

**Problem:** Module 05 shows `withEntities()` and predefined features, but students can't build custom, reusable store features.  
**Impact:** Complex stores become monoliths; hard to compose and test

**Proposed Enhancement:** **05b-SignalStore-Advanced-Composition**

| Demo URL                | Title                      | Teaches                                                  | Pattern                             |
| ----------------------- | -------------------------- | -------------------------------------------------------- | ----------------------------------- |
| `custom-feature-basics` | Building Custom Features   | Compose custom store features with `signalStoreFeature`  | Feature composition, type safety    |
| `feature-with-effects`  | Features with Side Effects | Implement effects within custom features                 | `rxMethod()`, async feature methods |
| `feature-caching`       | Feature: Smart Caching     | Build reusable cache feature (similar to `withEntities`) | Generic feature templates           |
| `feature-pagination`    | Feature: Pagination State  | Reusable pagination feature with computed selectors      | Stateless feature composition       |

**Example:**

```typescript
// custom-feature-basics
export function withRequestStatus() {
  return signalStoreFeature(
    withState({
      requestStatus: 'idle' as 'idle' | 'loading' | 'success' | 'error'
    }),
    withComputed(({ requestStatus }) => ({
      isLoading: computed(() => requestStatus() === 'loading'),
      isError: computed(() => requestStatus() === 'error')
    }))
  );
}

// Usage:
const AppStore = signalStore(
  withState({ ...initialState }),
  withRequestStatus(),
  withEntities<User>()
);
```

---

### TIER 2: IMPORTANT GAPS (Should Add)

#### Gap 5: Using RxJS Inside Signal Effects

**Problem:** Students learn RxJS and signals separately; don't understand how to use RxJS operators inside `effect()`.  
**Impact:** Ending up with `subscribe()` directly in effects which breaks auto-cleanup

**Proposed Demo:** **05c-RxJS-Signal-Integration**

| Demo URL                    | Title                     | Key Pattern                                               |
| --------------------------- | ------------------------- | --------------------------------------------------------- |
| `rxjs-in-effect`            | RxJS Operators in Effects | Using `toObservable()` + RxJS operators inside `effect()` |
| `switchmap-in-effect`       | SwitchMap Within Effects  | Cancel previous requests when signal changes              |
| `multicasting-with-signals` | Multicasting Patterns     | Using `shareReplay()` with signal conversion              |

**Code Example:**

```typescript
// Correct: Use toObservable() + RxJS + takeUntilDestroyed
effect(() => {
  const query = this.searchQuery();
  toObservable(this.searchQuery)
    .pipe(
      debounceTime(300),
      switchMap(q => this.api.search(q)),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe(results => this.results.set(results));
});
```

---

#### Gap 6: Testing Signal-Based Components & Stores

**Problem:** Module 07 teaches testing but focuses on Observable-based services; limited guidance on testing signals, computed, effects.  
**Impact:** Incomplete test coverage; untested signal logic

**Proposed Enhancement:** **07b-Testing-Signals**

| Demo URL            | Title                      | Coverage                                   |
| ------------------- | -------------------------- | ------------------------------------------ |
| `test-signals`      | Testing Signals & Computed | Synchronous signal testing patterns        |
| `test-effects`      | Testing Effects            | Async effect testing, cleanup verification |
| `test-signal-store` | Testing Custom Stores      | Integration testing with custom features   |

---

#### Gap 7: Form Validation Patterns (Signal Forms + Server Validation)

**Problem:** Module 04 covers Signal Forms basics; missing server-side validation integration.  
**Impact:** Students build forms without understanding async validation patterns

**Proposed Demo:** **04c-Advanced-Form-Validation**

| Demo URL                 | Title                    | Pattern                                                |
| ------------------------ | ------------------------ | ------------------------------------------------------ |
| `async-validators`       | Server-side Validators   | Using `asyncScheduler` validators with Signal Forms    |
| `cross-field-validation` | Cross-field Validation   | Validating multiple fields together within a FormGroup |
| `dynamic-validation`     | Dynamic Validation Rules | Changing validation rules based on other field values  |

---

### TIER 3: NICE-TO-HAVE (Consider Adding)

#### Gap 8: Performance Optimization with Signals

**Problem:** Signals are faster than Observables, but students don't understand why or how to measure impact.  
**Impact:** Missed opportunity to show performance benefits

**Proposed Demo:** **10b-Signal-Performance**

| Demo URL                        | Title                            | Measures                                            |
| ------------------------------- | -------------------------------- | --------------------------------------------------- |
| `change-detection-efficiency`   | OnPush vs Default with Signals   | Before/after change detection cycles using DevTools |
| `signal-computed-vs-observable` | Signal vs Observable Performance | Microbenchmarks: signal access vs subscribe         |

---

#### Gap 9: Accessibility with Signals

**Problem:** Modules teach component building but limited accessibility guidance specific to signals.  
**Impact:** Hard to build accessible ARIA-heavy components with modern patterns

**Proposed Demo:** **01b-Accessible-Components**

| Demo URL              | Title                         | Pattern                                            |
| --------------------- | ----------------------------- | -------------------------------------------------- |
| `aria-signal-binding` | ARIA Attributes with Signals  | Binding ARIA attributes to signal-derived state    |
| `focus-management`    | Focus Management with Effects | Using effects to manage focus; keyboard navigation |

---

#### Gap 10: Zoneless Change Detection

**Problem:** Angular v21 supports zoneless; demos don't show how to migrate or set up.  
**Impact:** Students unaware of this major optimization

**Proposed Demo:** **01c-Zoneless-Setup**

| Demo URL             | Title                     | Coverage                                       |
| -------------------- | ------------------------- | ---------------------------------------------- |
| `zoneless-basics`    | Zoneless Change Detection | Setting up app without NgZone                  |
| `zoneless-migration` | Migrating to Zoneless     | Patterns that need changes; debugging zoneless |

---

## Recommended Implementation Priority

### Phase 1: Critical Gaps (Weeks 1-4)

1. **02b:** Observable ↔ Signal bridge
2. **04b:** HttpResource patterns
3. **03b:** Signal effects advanced

**Why:** These unblock students from real-world development and complete the signals/interop narrative.

### Phase 2: Important Gaps (Weeks 5-8)

4. **05b:** SignalStore custom features
5. **05c:** RxJS inside effects
6. **07b:** Testing signals

**Why:** These enable production-grade applications and best practices.

### Phase 3: Nice-to-Have (Weeks 9+)

7. **10b:** Signal performance
8. **01b:** Accessibility
9. **01c:** Zoneless setup
10. **04c:** Advanced form validation

**Why:** These are optimizations and specialized topics for advanced students.

---

## Updated Curriculum Map (2026+)

```
FOUNDATION TIER
├─ Module 01: Components (Standalone, inputs, OnPush)
├─ Module 01b: Accessible Components ⭐ [Later add]
├─ Module 01c: Zoneless Setup ⭐ [Later add]
├─ Module 03: Signals (Core reactive primitives)
├─ MODULE 02: Reactive ⭐ [Reposition as Interop]
└─ Module 02b: Observable-Signal Interop ⭐ [New - Critical]

STATE MANAGEMENT TIER
├─ Module 04: Signal Forms
├─ Module 04b: HttpResource Patterns ⭐ [New - Critical]
├─ Module 04c: Advanced Form Validation ⭐ [Later add]
├─ Module 03b: Signal Effects Advanced ⭐ [New - Critical]
├─ Module 05: NGRx Signals
└─ Module 05b: SignalStore Custom Features ⭐ [New - Important]

ADVANCED TIER
├─ Module 05c: RxJS-Signal Integration ⭐ [New - Important]
├─ Module 06: Routing
├─ Module 07: Testing
├─ Module 07b: Testing Signals ⭐ [New - Important]
├─ Module 08: Reusability
├─ Module 09: Microfrontends
└─ Module 10: Optimization
    └─ Module 10b: Signal Performance ⭐ [Later add]

⭐ = Proposed new modules/demos
```

---

## Summary Table: All Proposed Demos

| Module | Demo                          | Priority | Teaching                | Approx Dev Time |
| ------ | ----------------------------- | -------- | ----------------------- | --------------- |
| 02b    | observable-to-signal          | P1       | toSignal() basics       | 1-2 days        |
| 02b    | observable-in-compute         | P1       | RxJS in computed        | 1-2 days        |
| 02b    | subject-to-output             | P1       | output() signals        | 1 day           |
| 04b    | httpresource-basic            | P1       | HttpResource() basics   | 2-3 days        |
| 04b    | httpresource-pagination       | P1       | Pagination patterns     | 2 days          |
| 04b    | httpresource-search           | P1       | Debounced search        | 2 days          |
| 04b    | httpresource-caching          | P1       | Smart caching           | 3 days          |
| 03b    | effect-cleanup                | P1       | Proper cleanup          | 1-2 days        |
| 03b    | effect-debounce               | P1       | Debounced effects       | 1-2 days        |
| 03b    | effect-write-back             | P1       | Persistence             | 2 days          |
| 03b    | effect-logging                | P1       | Analytics/logging       | 1 day           |
| 05b    | custom-feature-basics         | P2       | Feature composition     | 2 days          |
| 05b    | feature-with-effects          | P2       | Feature effects         | 2-3 days        |
| 05b    | feature-caching               | P2       | Reusable caching        | 2 days          |
| 05b    | feature-pagination            | P2       | Pagination features     | 2 days          |
| 05c    | rxjs-in-effect                | P2       | toObservable() + RxJS   | 2 days          |
| 05c    | switchmap-in-effect           | P2       | SwitchMap in effects    | 1-2 days        |
| 07b    | test-signals                  | P2       | Signal testing          | 2 days          |
| 07b    | test-effects                  | P2       | Effect testing          | 2 days          |
| 07b    | test-signal-store             | P2       | Store testing           | 3 days          |
| 04c    | async-validators              | P3       | Server validation       | 2 days          |
| 10b    | change-detection-efficiency   | P3       | Performance measurement | 2 days          |
| 10b    | signal-computed-vs-observable | P3       | Benchmarks              | 1-2 days        |
| 01b    | aria-signal-binding           | P3       | ARIA + Signals          | 2 days          |
| 01b    | focus-management              | P3       | Keyboard nav            | 2 days          |
| 01c    | zoneless-basics               | P3       | Zoneless setup          | 2 days          |

**Total Priority 1:** ~27 days (Core curriculum completion)  
**Total Priority 2:** ~21 days (Advanced patterns)  
**Total Priority 3:** ~20 days (Optimizations & specializations)

---

## Conclusion

The Angular demo curriculum for 2026 is **strong in fundamentals** but has gaps in:

1. ✅ **Signals** - Covered well (Module 03)
2. ✅ **State Management** - Covered well (Module 05)
3. ⚠️ **Interop** - RxJS/Observable missing bridge demos
4. ⚠️ **HTTP Patterns** - Missing httpResource/declarative data loading
5. ⚠️ **Effects & Side Effects** - Needs advanced patterns demo
6. ⚠️ **Testing** - Limited signal-based testing guidance

**Recommendation:** Implement Phase 1 (11 new demos in 3 modules) to complete the signal-first 2026 curriculum.
