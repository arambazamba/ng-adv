## Request Status Tracking

Before `httpResource()`, the standard RxJS pattern for tracking HTTP state was a `BehaviorSubject` state machine.

## The Pattern

```typescript
type RequestStatus = "idle" | "loading" | "success" | "error";

interface State<T> {
  status: RequestStatus;
  data: T | null;
  error: string | null;
}

@Injectable({ providedIn: "root" })
export class SkillsStateService {
  private state$ = new BehaviorSubject<State<Skill[]>>({ status: "idle", data: null, error: null });

  readonly status$ = this.state$.pipe(map((s) => s.status));
  readonly data$ = this.state$.pipe(map((s) => s.data));

  load() {
    this.state$.next({ status: "loading", data: null, error: null });
    this.http
      .get<Skill[]>("/api/skills")
      .pipe(
        catchError((err) => {
          this.state$.next({ status: "error", data: null, error: err.message });
          return EMPTY;
        }),
      )
      .subscribe((data) => this.state$.next({ status: "success", data, error: null }));
  }
}
```

## Template

```html
@if ((status$ | async) === 'loading') {
<mat-progress-bar>
  } @if ((status$ | async) === 'error') {
  <p>{{ error$ | async }}</p>
  } @if ((status$ | async) === 'success') { @for (item of data$ | async; track item.id) { ... } }</mat-progress-bar
>
```

---

## 2026 Context

This is the **classic RxJS pattern** — understand it for legacy codebases. In new code replace the entire pattern with a single `httpResource()` call:

```typescript
protected skills = httpResource<Skill[]>(() => `${env.api}skills`);
// skills.isLoading(), skills.error(), skills.value() — built-in
```

See the **HttpResource Pattern** demo for the modern equivalent.
