- Navigate to folder `\component-mocking` and examine `auth.service.ts` and compare it to `auth.service.mock.ts`. They are used in `use-mock.component.ts` and `use-mock.component.spec.ts`.

```typescript
export class UseMockComponent {
  constructor(private as: AuthService) {
    this.loggedIn = this.as.isAuthenticated();
  }
  loggedIn: boolean;
}
```
- The TestBed used in `use-mock.component.spec.ts` allows us to create the component and its supporting module. A `ComponentFixture` is a TestHarness for interacting with a component and its corresponding elements. In the providers section the mock object is used

```javascript
beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [BrowserAnimationsModule],
        declarations: [UseMockComponent],
        providers: [{ provide: AuthService, useValue: ms }],
    }).compileComponents();

    fixture = TestBed.createComponent(UseMockComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
});
```
