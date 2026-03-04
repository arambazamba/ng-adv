# Module 02-Reactive: Markdown Update Plan (2026)

**Goal:** Modernize 18 markdown guides to include signal-based alternatives, real-world context, and 2026 best practices.

---

## Update Strategy

### Template for Each Updated Guide

Each markdown file should follow this enhanced structure:

````markdown
## [Topic Name]

[Original description and bullet points]

### Key Concepts
- Concept 1
- Concept 2
- Concept 3

### Code Examples
```typescript
// Original RxJS example
````

### 🆕 Modern Alternative (2026+)

[What to use instead of Observable-based approach if available]

### When to Use This

- ✅ Use RxJS when...
- ❌ Avoid RxJS when... (use signals instead)

### Real-World Use Cases

[Practical scenarios from actual Angular applications]

### See Also

[Links to related modules/concepts]

````

---

## File-by-File Update Plan

### 1. `asyncpipe.md` - HIGH PRIORITY

**Current State:**
- Only explains async pipe syntax
- Missing: When async pipe is needed vs when to use signals

**Proposed Updates:**

```markdown
# Async Pipe

The async pipe is a convenient way to handle Observables in Angular templates.

- It automatically subscribes and unsubscribes to the Observable source, avoiding memory leaks and boilerplate code.
- Async pipe works with any Observable, including Arrays, Objects and individual properties.
- For example, you can use async pipe to display the latest value emitted by an Observable, or to iterate over an Observable array.

## Code Examples

### Basic Usage
```typescript
@Component({
  selector: 'app-user-detail',
  template: `
    <div>Name: {{ (user$ | async)?.name }}</div>
    <div>Email: {{ (user$ | async)?.email }}</div>
  `
})
export class UserDetailComponent {
  user$ = this.http.get<User>('/api/user');
  constructor(private http: HttpClient) {}
}
````

### Iterating Over Objects

```html
<div *ngFor="let item of items$ | async">
  {{ item.name }}
</div>
```

## 🆕 Modern Alternative: toSignal() (2026+)

In modern Angular (v20+), prefer converting Observables to signals:

```typescript
@Component({
  selector: 'app-user-detail',
  template: `
    <div>Name: {{ user().name }}</div>
    <div>Email: {{ user().email }}</div>
  `
})
export class UserDetailComponent {
  protected user = toSignal(this.http.get<User>('/api/user'));
  constructor(private http: HttpClient) {}
}
```

**Advantages of `toSignal()`:**

- ✅ Synchronous access - no async pipe needed
- ✅ Simpler template syntax
- ✅ Type-safe (no optional chaining needed)
- ✅ Easier to test and reason about

## When to Use Async Pipe

✅ **Use async pipe when:**

- Working with Observable-based libraries (Material, RxJS operators)
- Integrating legacy Observable code
- Mixing older and newer patterns temporarily
- Simple, one-off Observable subscriptions

❌ **Use toSignal() instead when:**

- Building new components from scratch
- You have multiple Observable properties
- You need to combine multiple Observables
- You want cleaner, more readable templates

## Real-World Scenario

### Before (Async Pipe - 2023 style)

```typescript
@Component({
  selector: 'app-user-list',
  template: `
    @if (loading$ | async) {
      <loading-spinner />
    } @else {
      @for (user of users$ | async; track user.id) {
        <user-card [user]="user" />
      }
    }
  `
})
export class UserListComponent {
  users$ = this.api.getUsers();
  loading$ = this.loadingService.loading$;
  constructor(
    private api: ApiService,
    private loadingService: LoadingService
  ) {}
}
```

### After (toSignal - 2026 style)

```typescript
@Component({
  selector: 'app-user-list',
  template: `
    @if (loading()) {
      <loading-spinner />
    } @else {
      @for (user of users(); track user.id) {
        <user-card [user]="user" />
      }
    }
  `
})
export class UserListComponent {
  protected users = toSignal(this.api.getUsers(), { initialValue: [] });
  protected loading = toSignal(this.loadingService.loading$);

  constructor(
    private api: ApiService,
    private loadingService: LoadingService
  ) {}
}
```

## See Also

- [toSignal() in Angular docs](https://angular.io/api/core/rxjs-interop/toSignal)
- Module 03: Signals
- Module 02b: Observable-Signal Interop (coming 2026)

````

---

### 2. `stateful.md` - HIGH PRIORITY

**Current State:**
- Shows BehaviorSubject as main state pattern
- No mention of modern approaches

**Key Addition:**

```markdown
# Stateful Service

[Keep existing content...]

## 2026 Context: Modern State Management

> ⚠️ **This demo teaches classic RxJS state management (pre-2016 style).**
> For new applications in 2026, see **Module 05: NGRx Signals** for modern signal-based state.

### Why We Still Teach BehaviorSubject

Understanding BehaviorSubject is important for:
- ✅ Reading legacy Angular codebases
- ✅ Integrating with Observable-based libraries
- ✅ Understanding reactive programming fundamentals
- ✅ Debugging state management issues

### Modern Equivalent: SignalStore

The same demo using NGRx SignalStore (2026 approach):

```typescript
// Old way (BehaviorSubject)
@Injectable({ providedIn: 'root' })
export class DemoService {
  private demos = new BehaviorSubject<Demo[]>([]);

  addDemo(demo: Demo) {
    const arr = this.demos.getValue();
    arr.push(demo);
    this.demos.next(arr);
  }

  getDemos() {
    return this.demos.asObservable();
  }
}

// New way (SignalStore - 2026)
@Injectable({ providedIn: 'root' })
export class DemoStore extends SignalStore {
  readonly demos = this.anotherSignal<Demo[]>([]);

  addDemo = this.updater((state, demo: Demo) => {
    return {
      ...state,
      demos: [...state.demos, demo]
    };
  });
}
````

### Migration Path

1. Learn RxJS patterns (this module)
2. Learn Signals fundamentals (Module 03)
3. Learn SignalStore (Module 05)
4. Migrate existing BehaviorSubject code → Signal-based

## See Also

- Module 05: NGRx Signals → Modern state management
- Module 02b: Observable-Signal Interop → Bridging old/new patterns

````

---

### 3. `creating.md` - MEDIUM PRIORITY

**Current State:**
- Very minimal content
- No practical examples

**Proposed Enhancement:**

```markdown
# Creating Observables

[Original intro...]

## Creating Observables from Values

### Using `of()`
```typescript
import { of } from 'rxjs';

// Create an Observable that emits multiple values synchronously
of(1, 2, 3, 4, 5).subscribe(value => console.log(value));
// Output: 1, 2, 3, 4, 5
````

### Using `from()`

```typescript
import { from } from 'rxjs';

// Create an Observable from an array
from([10, 20, 30]).subscribe(value => console.log(value));
// Output: 10, 20, 30

// Create from a Promise
from(Promise.resolve(42)).subscribe(value => console.log(value));
// Output: 42
```

## Creating Observables from Time

### Using `interval()`

```typescript
import { interval } from 'rxjs';

// Emit a number every 1000ms
interval(1000).subscribe(count => console.log(`Count: ${count}`));
// Output: Count: 0, Count: 1, Count: 2, ...
```

### Using `timer()`

```typescript
import { timer } from 'rxjs';

// Wait 2 seconds, then emit every 1 second
timer(2000, 1000).subscribe(count => console.log(count));
// Output: (after 2s) 0, 1, 2, ...
```

## Creating from Events

```typescript
import { fromEvent } from 'rxjs';

// Listen to button clicks
const button = document.querySelector('button');
fromEvent(button, 'click').subscribe(() => {
  console.log('Button clicked');
});
```

## Creating Custom Observables

```typescript
import { Observable } from 'rxjs';

const myObservable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();

  // Return cleanup function
  return () => console.log('Observable cleaned up');
});

myObservable.subscribe(value => console.log(value));
```

## Real-World Examples

### Polling Data

```typescript
interval(5000)
  .pipe(switchMap(() => this.api.getLatestData()))
  .subscribe(data => console.log(data));
```

### Form Input Validation

```typescript
fromEvent(inputElement, 'input')
  .pipe(debounceTime(300))
  .subscribe(event => this.validateInput(event));
```

## Open Console

Open browser DevTools (F12) to see console output for these examples.

## See Also

- Module 02: Transformation → Transform created data
- Module 02: Operators → Filter and map created data

````

---

### 4. `operators.md` - MEDIUM PRIORITY

**Add section:**

```markdown
# Base Operators

## Real-World Use Cases

### Filter: Finding Active Users
```typescript
users$.pipe(
  filter(user => user.isActive)
).subscribe(activeUsers => console.log(activeUsers));
````

### Map: Extracting User Names

```typescript
users$.pipe(
  map(user => user.name)
).subscribe(name => console.log(name)); // Logs: 'Alice', 'Bob', ...
```

### Reduce: Calculating Total

```typescript
prices$.pipe(
  reduce((sum, price) => sum + price, 0)
).subscribe(total => console.log(`Total: $${total}`));
```

## When to Use Each Operator

| Operator    | When to Use                 | Example                               |
| ----------- | --------------------------- | ------------------------------------- |
| `map()`     | Transform each value        | Extract property from object          |
| `filter()`  | Keep only certain values    | Keep only items where status='active' |
| `reduce()`  | Combine all values into one | Sum all numbers in a stream           |
| `forEach()` | Side effect on each value   | Log each value; track analytics       |
| `take()`    | Stop after N values         | Get first 10 results                  |
| `skip()`    | Ignore first N values       | Skip header, process body             |

## See Also

- [RxJS Marbles](https://rxmarbles.com/) - Visual guide to each operator

````

---

### 5. ALL FILES - ADD FOOTER SECTION

Add to every markdown file:

```markdown
---

## 2026 Learning Path

This module teaches **RxJS Observables**, which remain important for:
- Working with Angular Material components
- Integrating third-party Observable-based libraries
- Understanding reactive programming fundamentals

**But in modern 2026 Angular applications:**
- ✅ Use **Signals** for application state (Module 03)
- ✅ Use **HttpResource** for HTTP requests
- ✅ Use **SignalStore** for complex state (Module 05)
- ✅ Use RxJS mainly for library interop

**Suggested Reading Order:**
1. Finish Module 02: Reactive (this)
2. Go to Module 03: Signals (learn primary pattern)
3. Return to Module 02b: Observable-Signal Interop (bridge knowledge)
4. Module 05: NGRx Signals (complex state)

**More Resources:**
- [Angular Signals Guide](https://angular.io/guide/signals)
- [RxJS Official Docs](https://rxjs.dev)
- [Reactive Programming: What's all the hype?](https://reactive.how)
````

---

## Implementation Checklist

### High Priority Files (Critical Context)

- [ ] `asyncpipe.md` - Add toSignal() alternative + when to use
- [ ] `stateful.md` - Add SignalStore modern equivalent + 2026 context
- [ ] `creating.md` - Add practical examples

### Medium Priority Files (Enhanced Examples)

- [ ] `operators.md` - Add real-world use cases + decision table
- [ ] `transformation.md` - Add practical mapping/filtering scenarios
- [ ] `combining.md` - Add multi-source scenarios
- [ ] `action-streams.md` - Add event handling patterns
- [ ] `marble-testing.md` - Add testing importance context

### Low Priority Files (Add Footer Only)

- [ ] `error-handling.md`
- [ ] `custom-operators.md`
- [ ] `subjects.md`
- [ ] `unsubscribe.md`
- [ ] `reactive.md`
- [ ] `imperative.md`
- [ ] `debounce.md`
- [ ] `mouse-dom.md`
- [ ] `responsive-screen.md`
- [ ] `event-bus.md`

---

## Timeline

- **Week 1:** High priority files (3 files)
- **Week 2:** Medium priority files (5 files)
- **Week 3:** Low priority files (10 files) + add standard footer

**Total Effort:** ~3-4 weeks for one developer

---

## Example of Final Enhanced Guide Structure

For reference, here's what a fully updated file should look like:

````markdown
# [Topic]

[Original description from current guide]

## Key Concepts
- Concept 1
- Concept 2
- Concept 3

## Code Examples

### Basic Example
```typescript
// Original RxJS code
````

### Real-World Scenario

```typescript
// Practical implementation
```

## 🆕 Modern Alternative (2026+)

[Show signal-based approach if applicable]

[Explain advantages]

## When to Use This

✅ Use RxJS when:

- [Scenario 1]
- [Scenario 2]

❌ Use alternative when:

- [Scenario 1]

## See Also

- [Related topic]
- [Module reference]

---

## 2026 Learning Path

[Standard footer for all files]

```

---

## Success Metrics

After implementing these updates, guides should:
- ✅ Include modern signal-based alternatives (where applicable)
- ✅ Provide practical, real-world examples
- ✅ Explain when to use RxJS vs signals
- ✅ Link to related modules and resources
- ✅ Help students understand 2026 best practices

---

## Notes

- Updates should NOT remove RxJS content - keep it comprehensive
- Goal is to ADD context, not replace old knowledge
- Each guide should be self-contained but cross-reference others
- Keep markdown simple and readable; avoid overcomplicated examples
```
