# Angular Testing with Vitest (v21+)

## Setup

angular.json builder: `@angular/build:unit-test`
```bash
ng test              # run once
ng test --watch      # watch mode
ng test --code-coverage
```

## Basic Component Test

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MyComponent', () => {
  let fixture: ComponentFixture<MyComponent>;
  let component: MyComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
      providers: [
        { provide: MyService, useValue: { getData: vi.fn().mockReturnValue(of([])) } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sets signal input', () => {
    fixture.componentRef.setInput('data', mockData);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('expected');
  });

  it('emits output on click', () => {
    let emitted: Item | undefined;
    component.selected.subscribe(i => emitted = i);
    fixture.nativeElement.querySelector('button').click();
    expect(emitted).toEqual(expectedItem);
  });
});
```

## Mock Signal-Based Service

```typescript
const mockAuth = {
  user: signal<User | null>(null),
  isAuthenticated: computed(() => mockAuth.user() !== null),
  login: vi.fn(),
  logout: vi.fn(),
};

beforeEach(() => vi.clearAllMocks());

providers: [{ provide: AuthService, useValue: mockAuth }]

// In test:
mockAuth.user.set({ id: '1', name: 'Test' });
fixture.detectChanges();
expect(fixture.nativeElement.querySelector('.content')).toBeTruthy();
```

## HTTP Testing

```typescript
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

let httpMock: HttpTestingController;

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [provideHttpClient(), provideHttpClientTesting()],
  });
  httpMock = TestBed.inject(HttpTestingController);
});
afterEach(() => httpMock.verify());

it('fetches data', () => {
  service.getUsers().subscribe(users => expect(users).toEqual(mockUsers));
  const req = httpMock.expectOne('/api/users');
  expect(req.request.method).toBe('GET');
  req.flush(mockUsers);
});
```

## httpResource Testing

```typescript
it('displays data after load', () => {
  fixture.detectChanges();
  expect(fixture.nativeElement.textContent).toContain('Loading');
  httpMock.expectOne('/api/users/1').flush({ id: '1', name: 'John' });
  fixture.detectChanges();
  expect(fixture.nativeElement.textContent).toContain('John');
});
```

## Async Testing

```typescript
import { fakeAsync, tick, flush, waitForAsync } from '@angular/core/testing';

it('debounces', fakeAsync(() => {
  component.query.set('test');
  tick(300);
  fixture.detectChanges();
  expect(component.results().length).toBeGreaterThan(0);
  flush();
}));

it('loads async', waitForAsync(() => {
  fixture.detectChanges();
  fixture.whenStable().then(() => {
    fixture.detectChanges();
    expect(component.data()).toBeDefined();
  });
}));
```

## Signal Testing

```typescript
it('updates computed when signal changes', () => {
  const count = signal(0);
  const doubled = computed(() => count() * 2);
  expect(doubled()).toBe(0);
  count.set(5);
  expect(doubled()).toBe(10);
});
```

## Rules

- Never test private methods - test behavior and output
- Always mock external dependencies (HTTP, services)
- Always `httpMock.verify()` in `afterEach`
- Use `vi.clearAllMocks()` in `beforeEach`
- Use `fixture.componentRef.setInput()` for signal inputs
- Test error scenarios and edge cases
- Aim for 80%+ coverage
