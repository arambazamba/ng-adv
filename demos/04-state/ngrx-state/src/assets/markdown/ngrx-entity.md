- Show the use of `Store<DemoState>`, explain EntityAdapter and why it is using this structure

```typescript
interface EntityState<T> {
    ids: string[];
    entities: { [id: string]: T };
}
```

- Explain `this.store.dispatch(loadDemos());` in `demo-container.component.ts`
- Examin setMenu() which now uses the ngrx store

```typescript
setMenu() {
    this.demos$ = this.store.select(getAllDemos);
}
```