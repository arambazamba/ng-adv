import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async, waitForAsync, } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SimpleAuthService } from '../simple-auth.service';
import { SimpleAuthWhenStableComponent } from './simple-auth-when-stable.component';

describe('Component - AsyncTest - async ... whenStable', () => {
  let component: SimpleAuthWhenStableComponent;
  let fixture: ComponentFixture<SimpleAuthWhenStableComponent>;
  let service: SimpleAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SimpleAuthWhenStableComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [SimpleAuthService],
});

    fixture = TestBed.createComponent(SimpleAuthWhenStableComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SimpleAuthService);
  });

  it(
    'component has been created',
    waitForAsync(() => {
      expect(component).toBeTruthy();
    })
  );

  it(
    'returns false when the user is not authenticated',
    waitForAsync(() => {
      fixture.detectChanges();
      expect(component.needsLogin).toBeTruthy();
      expect(
        fixture.debugElement
          .query(By.css('span'))
          .nativeElement.textContent.trim()
      ).toBe('NotAuthenticated');
    })
  );

  it(
    'returns true when the user is authenticated',
    waitForAsync(() => {
      fixture.detectChanges();
      spyOn(service, 'isAuthenticated').and.returnValue(of(true));

      fixture.whenStable().then(() => {
        component.ngOnInit();
        fixture.detectChanges();

        expect(
          fixture.debugElement
            .query(By.css('span'))
            .nativeElement.textContent.trim()
        ).toBe('Authenticated');
      });
    })
  );

  afterEach(() => {
    localStorage.removeItem('token');
  });
});
