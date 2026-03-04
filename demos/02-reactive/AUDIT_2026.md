# Module 02-Reactive: 2026 Audit & Recommendations

**Date:** March 4, 2026  
**Module:** `demos/02-reactive/ng-reactive`  
**Angular Version:** v21  
**Focus:** RxJS Observables, Subjects, Operators  
**Status:** ✅ **STILL TEACHING IN 2026** with Important Context

---

## Executive Summary

The **02-reactive module is FOUNDATIONAL and remains essential in 2026**, but **must be recontextualized** within a modern Angular signal-first curriculum. The module teaches RxJS patterns that are still widely used in Angular libraries, third-party packages, and legacy systems, but should be positioned as **"interop knowledge"** rather than primary patterns.

### Key Finding

- **18 demos** - all present and properly organized
- **Code Quality:** Modern patterns (OnPush, inject(), standalone) ✅
- **Teaching Value:** High - but positioned incorrectly without signal context
- **Markdown Guides:** Basic, need enhancement with alternatives and best practices
- **Missing:** No side-by-side comparison with signal-based approaches

---

## Detailed Audit Results

### Task A: Component & Demo Validation

#### ✅ All 18 Demos Present & Properly Structured

| Demo              | Route               | Status   | Component Code       | Markdown  | Issues             |
| ----------------- | ------------------- | -------- | -------------------- | --------- | ------------------ |
| Imperative        | `imperative`        | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Declarative       | `reactive`          | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Async Pipe        | `async-pipe`        | ✅ Valid | Modern patterns      | ✅ Exists | Outdated narrative |
| Unsubscribing     | `unsubscribe`       | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Subjects          | `subjects`          | ✅ Valid | Teaching component   | ✅ Exists | None               |
| Action Streams    | `action-streams`    | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Debounced Search  | `debounced`         | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Mouse & DOM       | `mouse-dom`         | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Responsive Screen | `responsive-screen` | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Event Bus         | `event-bus`         | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Creating          | `creating`          | ✅ Valid | Modern patterns      | ✅ Exists | Minimal examples   |
| Operators         | `operators`         | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Transformation    | `transformation`    | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Error Handling    | `err-handling`      | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Custom Operators  | `custom-operators`  | ✅ Valid | Modern patterns      | ✅ Exists | Advanced topic     |
| Combining         | `combining`         | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Marble Testing    | `marble-testing`    | ✅ Valid | Modern patterns      | ✅ Exists | None               |
| Stateful Service  | `stateful`          | ✅ Valid | Uses BehaviorSubject | ✅ Exists | Outdated pattern   |

#### Modern Code Patterns Found (Good!)

```typescript
// ✅ OnPush change detection
changeDetection: ChangeDetectionStrategy.OnPush

// ✅ inject() instead of constructor
protected readonly userService = inject(UserService);

// ✅ Standalone components
imports: [AsyncPipe, MatCard, ...]

// ✅ takeUntilDestroyed for cleanup
this.ts.getTasks().pipe(takeUntilDestroyed(this.destroyRef))
```

#### ⚠️ Intentional "Old" Patterns (Educational)

Components CORRECTLY demonstrate patterns being taught:

- **Subjects demo:** Uses `Subject`, `BehaviorSubject`, `ReplaySubject`, `AsyncSubject` - intentional to teach differences
- **Stateful demo:** Uses `BehaviorSubject` with `.next()` and `.getValue()` - intentional to teach state mutation with observables
- **Async Pipe demo:** Uses `| async` - intentional to teach template subscription

---

### Task B: Markdown Guide Quality Audit

#### Issues Found

1. **`asyncpipe.md`** - ⚠️ **Outdated Context**
   - Shows async pipe but doesn't mention `toSignal()` as modern alternative
   - Missing: "When to use async pipe vs toSignal()"
   - Recommended: Add "Modern Alternative" section

2. **`stateful.md`** - ⚠️ **Uses Stateful Service (BehaviorSubject)**
   - Correct for teaching RxJS, but should note: "This is for learning RxJS. In 2026, use SignalStore"
   - Missing: Bridge reference to Module 05 (ngrx-signals)
   - Recommended: Add migration note

3. **`creating.md`** - ⚠️ **Minimal Content**
   - Very basic bullet points
   - Missing: Examples with `of()`, `from()`, `interval()`, `timer()`
   - Recommended: Add practical examples

4. **`operators.md`, `transformation.md`, `combining.md`** - ⚠️ **Lack Real-World Context**
   - Good operator summaries, but no use-case examples
   - Recommended: Add "When to use" and "Real-world example" sections

5. **All Markdown Files** - ✅ **Structurally Sound**
   - Proper bullet points and code blocks
   - Consistent formatting
   - Accessible and readable

#### Markdown Quality Score: **6/10**

- ✅ Structure and formatting
- ✅ All files present
- ⚠️ Missing modern context and alternatives
- ⚠️ Sparse on practical examples
- ❌ No comparison with signal-based approaches

---

### Task C: db.json Validation

#### ✅ Database Structure Valid

```json
{
  "demos": [
    {
      "url": "imperative",
      "title": "Imperative Reactivity",
      "teaches": "...",
      "sortOrder": 1,
      "topic": "Reactive Fundamentals",
      "md": "imperative"
    }
  ]
}
```

✅ **All fields present and consistent:**

- `url` - kebab-case ✅
- `title` - descriptive ✅
- `teaches` - clear learning objective ✅
- `sortOrder` - logical progression ✅
- `topic` - grouped by category ✅
- `md` - markdown filename without extension ✅

✅ **Markdown References Valid**

- All 18 demos have corresponding `.md` files in `src/assets/markdown/`

#### Topics Organization

```
Reactive Fundamentals (sortOrder 1-5): Imperative, Reactive, AsyncPipe, Unsubscribe, Subjects
Handling Events & Data (sortOrder 10-14): ActionStreams, Debounce, MouseDOM, ResponsiveScreen, EventBus
RxJS Operators & Observables (sortOrder 20-27): Creating, Operators, Transformation, ErrorHandling, CustomOperators, Combining, MarbleTesting, StatefulService
```

✅ **Logical progression:** Each topic builds on previous concepts

---

### Task D: Proposed Demo Gaps & 2026 Curriculum Context

#### The Core Question: "Would you still teach all this in 2026?"

**Answer: YES, but with this critical context:**

1. **RxJS remains essential knowledge** because:
   - Angular Material uses Observables extensively
   - Third-party libraries (state management, caching, HTTP interceptors) use RxJS
   - HttpClient is built on Observables
   - Understanding reactive logic helps with signal-based patterns

2. **However, the narrative should change:**
   - OLD: "Use RxJS observables as primary state pattern"
   - NEW: "Understand RxJS for library interop; use signals for application state"

#### Missing Demo Ideas for 2026

##### CRITICAL - Must Add (High Priority)

| #   | Demo URL               | Title                          | Teaches                                                    | Topic          | Prerequisites                    | Where to Add                           |
| --- | ---------------------- | ------------------------------ | ---------------------------------------------------------- | -------------- | -------------------------------- | -------------------------------------- |
| 1   | `observable-to-signal` | Observable → Signal Conversion | Convert Observables to signals with `toSignal()`           | Signal Interop | Signals fundamentals (Module 03) | After Module 03                        |
| 2   | `httpresource-pattern` | HttpResource Pattern           | Use `httpResource()` for declarative HTTP + loading states | Signal HTTP    | HttpResource basics (Module 04)  | New mini-module or Module 02 extension |
| 3   | `rxjs-in-signals`      | RxJS inside Signal Effects     | Using RxJS operators within signal effects and computed    | Signal Effects | Signals + RxJS understanding     | Module 05 (ngrx-signals)               |

##### RECOMMENDED - Should Add (Medium Priority)

| #   | Demo URL                 | Title                      | Teaches                                                             | Topic            | Prerequisites             |
| --- | ------------------------ | -------------------------- | ------------------------------------------------------------------- | ---------------- | ------------------------- |
| 4   | `subject-to-output`      | Subject vs Output Signals  | How Subject multicasting differs from output() signals              | Signal Migration | Signals, Subjects         |
| 5   | `timer-interval`         | Timer & Interval Operators | Create time-based streams with `interval()`, `timer()`, `delay()`   | RxJS Operators   | Creating Observables      |
| 6   | `http-with-rxjs`         | HTTP + RxJS Integration    | Using HttpClient with operators like `switchMap()`, `shareReplay()` | RxJS Real-World  | Operators, Transformation |
| 7   | `request-status-pattern` | Request Status Tracking    | Track loading/error/success states with RxJS (before SignalStore)   | RxJS Patterns    | Error Handling, Combining |

##### DEPRECATED - Can Retire (Low Priority)

- None - all current demos teach foundational concepts still needed

---

### Current Module Positioning Issues

#### ❌ Problem 1: Async Pipe Narrative is Outdated

The async pipe demo teaches async pipe as the primary way to handle Observables in templates. In 2026:

- Still valid for Observable-based APIs
- But **toSignal()** is now preferred for application code
- Recommended: Add "Modern Alternative" subsection

#### ❌ Problem 2: No Bridge to Signals

Students complete Module 02 (all Observables) then jump to Module 05 (SignalStore). Missing:

- How to convert Observables to signals
- When to use RxJS vs signals
- Practical interop patterns

#### ❌ Problem 3: Stateful Service Uses Outdated Pattern

The Stateful Service demo teaches `BehaviorSubject` + `.next()` + `.getValue()`. Perfect for RxJS teaching, but:

- Should include note: "This is classic RxJS. See Module 05 for modern SignalStore approach"
- Missing: Side-by-side comparison

---

## Recommended Actions

### Priority 1: Update Markdown Guides (Quick Wins)

1. **asyncpipe.md** - Add "Modern Alternative" section

   ````markdown
   ## Modern Alternative: toSignal()

   While async pipe is still valid, consider toSignal() for new code:
   ```typescript
   // Old way (async pipe)
   {{ data$ | async }}

   // Modern way (2026+)
   data = toSignal(this.http.get(...), { initialValue: [] });
   ````

2. **stateful.md** - Add migration note

   ```markdown
   > **2026 Note:** This demo teaches classic RxJS state management.
   > For modern applications, see Module 05: SignalStore for signal-based state.
   ```

3. **creating.md** - Add concrete examples

   ````markdown
   ## Practical Examples

   ### Using of()
   ```typescript
   of(1, 2, 3).subscribe(console.log); // Emit: 1, 2, 3
   ````

4. **Operators/Transformation/Combining** - Add "Real-world use case" sections

### Priority 2: Add New Demos (2-4 weeks)

1. **Module 02 Extension: Observable ↔ Signal Bridge**
   - `observable-to-signal` demo
   - `signal-to-observable` demo
   - Place after current demos

2. **Cross-module: "When to Use What" Decision Tree**
   - Create visual guide: Observable vs Signal vs HttpResource
   - Link from Modules 02, 03, 04, 05

### Priority 3: Reposition Module in Curriculum

**Suggested Order (2026+):**

1. Module 01-Components (Fundamentals)
2. Module 03-Signals (NEW PRIMARY)
3. Module 04-Signal-Forms (State management)
4. Module 05-NGRx-Signals (Complex state)
5. **Module 02-Reactive (Interop & Legacy)** ← Reposition here as "When you encounter Observable-based APIs"
6. Module 06-Routing
7. Module 07-Testing

This puts signals-first before introducing RxJS complexity.

---

## 2026 Curriculum Statement

> "In 2026, Angular applications are **signal-centric**. Module 02 teaches RxJS Observables as **foundational knowledge for library interop**, not as the primary state management pattern. Learn signals first (Module 03), then understand how RxJS integrates (Module 02 extension), then use SignalStore for complex state (Module 05)."

---

## Audit Checklist Summary

- ✅ All 18 demos present and properly organized
- ✅ Code uses modern patterns (OnPush, inject, standalone)
- ✅ All markdown files exist
- ⚠️ Markdown content outdated (lacks signal context/alternatives)
- ⚠️ No bridge demos between Observables and Signals
- ✅ db.json structure valid and consistent
- ✅ Logical topic progression
- ❌ Module positioning unclear in 2026 curriculum

---

## Final Recommendation

**VERDICT: KEEP MODULE, MODERNIZE CONTEXT**

The 02-reactive module should remain in the curriculum because RxJS knowledge is still essential for:

- Understanding Angular Material
- Integrating third-party libraries
- Legacy system maintenance
- Professional Angular development

**However, MUST accompany actions:**

1. ✏️ Update markdown guides to mention modern alternatives
2. ➕ Add observable-to-signal bridge demos
3. 🔄 Reposition in curriculum after Signals fundamentals
4. 📋 Add "2026 Context" notes to intro explaining why RxJS still matters
