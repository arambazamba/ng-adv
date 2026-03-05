import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { vi } from 'vitest';
import { SimpleAuthService } from '../simple-auth.service';
import { SimpleAuthFakeAsyncComponent } from './simple-auth-fake-async.component';

describe('Component - AsyncTest - FakeAsync', () => {
  let component: SimpleAuthFakeAsyncComponent;
  let fixture: ComponentFixture<SimpleAuthFakeAsyncComponent>;
  let service: SimpleAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleAuthFakeAsyncComponent],
      providers: [SimpleAuthService],
    }).compileComponents();

    service = TestBed.inject(SimpleAuthService);
  });

  it('component has been created', () => {
    fixture = TestBed.createComponent(SimpleAuthFakeAsyncComponent);
    component = fixture.componentInstance;
    expect(component.needsLogin).toBeTruthy();
  });

  it('returns false when the user is not authenticated', () => {
    vi.useFakeTimers();
    fixture = TestBed.createComponent(SimpleAuthFakeAsyncComponent);
    fixture.detectChanges();
    vi.advanceTimersByTime(300);
    fixture.detectChanges();
    expect(
      fixture.debugElement
        .query(By.css('span'))
        .nativeElement.textContent.trim()
    ).toBe('NotAuthenticated');
    vi.useRealTimers();
  });

  it('returns true when the user is authenticated', () => {
    vi.spyOn(service, 'isAuthenticated').mockReturnValue(of(true));
    fixture = TestBed.createComponent(SimpleAuthFakeAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(
      fixture.debugElement
        .query(By.css('span'))
        .nativeElement.textContent.trim()
    ).toBe('Authenticated');
  });

  afterEach(() => {
    localStorage.removeItem('token');
  });
});
