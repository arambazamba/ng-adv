# Signals Demo Module

Comprehensive demonstrations of Angular v21+ signals-based reactive programming. All demos use modern standalone components with OnPush change detection and signal-driven state management.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Navigate to http://localhost:4200/demos
```

## Demos Overview

| # | Route | Title | Teaches | Topic |
|---|-------|-------|---------|-------|
| 1 | `signals-basics` | Signals Basics | Create reactive state with signal(). Use computed() for derived state and effect() for side effects. Read values with calling the signal as function, update with .set() and .update(). | Signals Fundamentals |
| 2 | `http-resource` | HTTP Resource API | Load and display async data with httpResource(). Handle loading state, errors, and display data conditionally in templates. | Signals Fundamentals |
| 3 | `signal-effects` | Signal Effects & Filtering | Use effect() to react to signal changes for side effects. Track filter state with signals and update httpResource() parameters dynamically. Demonstrates conditional data loading. | Signals Fundamentals |
| 4 | `deep-signals` | Deep Signal Changes | Track nested changes within signal objects using deep equality checks. Understand when signals notify dependent computations. | Signals Fundamentals |
| 5 | `signal-inputs` | Inputs Signals | Define typed component inputs as signals using input() and input.required(). Use with two-way binding in parent components. | Signals Fundamentals |
| 10 | `model-inputs` | Model Two-Way Binding | Implement two-way binding with model() signal API. Parent and child components sync data mutually without manual event handling. | Signal Patterns |
| 11 | `container-presenter` | Signals Container-Presenter | Apply Container-Presenter pattern using signals. Container manages state and httpResource data, Presenter displays UI. Pass data and callbacks to child presenters. | Signal Patterns |
| 12 | `signals-event-bus` | Signals EventBus | Create a lightweight event bus with signals for cross-component communication. Emit and subscribe to events without RxJS. | Signal Patterns |
| 13 | `rxjs-interop` | RxJS to Signals Bridge | Convert RxJS Observables to signals with toSignal(). Create writeable signals from async sources. Combine signals with existing Observable code. | Signal Patterns |
| 20 | `select-signal` | NgRx selectSignal Integration | Use NgRx selectSignal() to derive signals directly from store state. Type-safe store integration without subscribe patterns. | Advanced Integration |
| 21 | `zoneless-change-detection` | OnPush & Zoneless CD | Run Angular with zoneless change detection using signals. Remove NgZone dependency and improve performance with pure signal-based reactivity. | Advanced Integration |

## Learning Path

### Signals Fundamentals (Demos 1-5)
Start here to understand the core signal APIs and how they enable reactive programming:
- **signals-basics** — Foundation: `signal()`, `computed()`, `effect()`
- **http-resource** — Load remote data reactively
- **signal-effects** — React to signal changes with side effects
- **deep-signals** — Handle nested object mutations
- **signal-inputs** — Accept typed signal inputs in components

### Signal Patterns (Demos 10-13)
Apply signals to common architectural patterns:
- **model-inputs** — Two-way binding between parent/child
- **container-presenter** — Separate data logic from presentation
- **signals-event-bus** — Cross-component communication
- **rxjs-interop** — Bridge with existing RxJS code

### Advanced Integration (Demos 20-21)
Integrate signals with Angular ecosystem and performance optimization:
- **select-signal** — State management with NgRx signals
- **zoneless-change-detection** — Performance optimization without NgZone

## Key Features

✅ **All standalone components** — No NgModules  
✅ **OnPush change detection** — Optimized rendering  
✅ **Modern control flow** — @if/@for/@switch (no *ngIf/*ngFor)  
✅ **Signal inputs/outputs** — input()/output() APIs  
✅ **httpResource()** — Declarative async data loading  
✅ **Reactive state** — signal()/computed()/effect()  
✅ **No async pipe** — Signals used directly in templates  

## Architecture

```
src/
├── app/
│   ├── demos/
│   │   ├── demo-container/         # Main wrapper component
│   │   ├── samples/
│   │   │   ├── signals-basics/
│   │   │   ├── http-resource/
│   │   │   ├── signal-effects/
│   │   │   ├── deep-signals/
│   │   │   ├── signal-inputs/
│   │   │   ├── model-inputs/
│   │   │   ├── container-presenter/
│   │   │   ├── signals-event-bus/
│   │   │   ├── rxjs-interop/
│   │   │   ├── select-signal/
│   │   │   └── zoneless-change-detection/
│   │   └── demo.routes.ts
│   ├── shared/                     # Shared directives, services
│   ├── skills/                     # Demo data module
│   ├── customers/                  # NgRx state example
│   └── app.component.ts
├── styles.scss                     # Global styles
└── main.ts
public/
└── markdown/                       # Demo guides (loaded in app)
    ├── signals-basics.md
    ├── http-resource.md
    ├── signal-effects.md
    ├── deep-signals.md
    ├── signal-inputs.md
    ├── model-inputs.md
    ├── container-presenter.md
    ├── signals-bus.md
    ├── rxjs-interop.md
    ├── select-signal.md
    └── zoneless-change-detection.md
```

## Best Practices Demonstrated

### 1. Reactive State Management
```typescript
// Create signals for state
searchQuery = signal('');
results = signal<User[]>([]);

// Derive computed values
filteredResults = computed(() => 
  this.results().filter(u => u.name.includes(this.searchQuery()))
);

// React to changes with effects (side effects)
logQuery = effect(() => {
  console.log('Query changed:', this.searchQuery());
});
```

### 2. Data Loading with httpResource()
```typescript
// Automatic refetch when dependencies change
data = httpResource<User[]>(() => {
  const search = this.searchQuery();
  return search ? `/api/users?q=${search}` : undefined;
}, { defaultValue: [] });
```

### 3. Component Inputs with Signals
```typescript
// Type-safe, reactive inputs
userId = input.required<number>();
user = resource(() => {
  const id = this.userId();
  return { request: { id } };
});
```

### 4. Template Control Flow
```html
@if (data.isLoading()) {
  <app-spinner />
} @else if (data.error()) {
  <div class="error">{{ data.error().message }}</div>
} @else {
  @for (item of data.value(); track item.id) {
    <app-card [item]="item" />
  }
}
```

## Debugging

Enable Angular DevTools to inspect signal state changes in real-time.

## References

- [Angular Signals Documentation](https://angular.dev/guide/signals)
- [httpResource API](https://angular.dev/guide/http)
- [Change Detection Strategies](https://angular.dev/guide/change-detection)
- [Angular v21 Release Notes](https://angular.io/guide/releases)

## See Also

- **[FINDINGS.md](./FINDINGS.md)** — Detailed audit report of demo quality and recommendations
- **[db.json](./db.json)** — Demo metadata and demo catalog
