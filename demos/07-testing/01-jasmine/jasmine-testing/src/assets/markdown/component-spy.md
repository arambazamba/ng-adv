- Navigate to folder `\component-mocking`. For better comparison the mocking example is solved using a spy in the use-spy folder.

- Creation of the spy object

```javascript
beforeEach(() => {
    spy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    spy.isAuthenticated.and.returnValue(true);
    comp = new UseSpyComponent(spy);
  });
```

- In the providers section the spy object is used

```javascript
beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [UseSpyComponent],
      providers: [{ provide: AuthService, useValue: spy }],
    }).compileComponents();;
});
```
