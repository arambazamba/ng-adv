- Examine the `mockstore.component.spec.ts` file in `/ngrx-mockstore/mockstore`.

- It uses `provideMockStore` to mock the NgRx `Store` injected into `mockstore.component.ts`. Pass `initialState` to seed state without needing reducers.

- You can copy initial state from the Redux DevTools when using advanced data structures like `EntityAdapter`.

```typescript
beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MockstoreComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    fixture = TestBed.createComponent(MockstoreComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
});
```

- Use `mockStore.overrideSelector()` to override a specific selector's return value at test-time:

```typescript
mockStore.overrideSelector(getAllDemos, mockDemos);
mockStore.refreshState();
```
