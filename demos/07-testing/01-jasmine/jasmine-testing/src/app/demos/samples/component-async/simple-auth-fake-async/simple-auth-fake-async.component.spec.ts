import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SimpleAuthService } from '../simple-auth.service';
import { SimpleAuthFakeAsyncComponent } from './simple-auth-fake-async.component';

describe('Component - AsyncTest - FakeAsync', () => {
  let component: SimpleAuthFakeAsyncComponent;
  let fixture: ComponentFixture<SimpleAuthFakeAsyncComponent>;
  let service: SimpleAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SimpleAuthFakeAsyncComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [SimpleAuthService],
});

    fixture = TestBed.createComponent(SimpleAuthFakeAsyncComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SimpleAuthService);
  });

  it('component has been created', fakeAsync(() => {
    expect(component.needsLogin).toBeTruthy();
  }));

  it('returns false when the user is not authenticated', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    component.ngOnInit();
    tick(300);
    fixture.detectChanges();
    expect(
      fixture.debugElement
        .query(By.css('span'))
        .nativeElement.textContent.trim()
    ).toBe('NotAuthenticated');
  }));

  it('returns true when the user is authenticated', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(service, 'isAuthenticated').and.returnValue(of(true));
    tick(400);
    component.ngOnInit();
    tick();
    fixture.detectChanges();

    expect(
      fixture.debugElement
        .query(By.css('span'))
        .nativeElement.textContent.trim()
    ).toBe('Authenticated');
  }));

  afterEach(() => {
    localStorage.removeItem('token');
  });
});
