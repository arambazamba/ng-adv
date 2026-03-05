import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SimpleAuthService } from '../simple-auth.service';
import { SimpleAuthDoneComponent } from './simple-auth-done.component';

describe('Component - AsyncTest - done', () => {
  let component: SimpleAuthDoneComponent;
  let fixture: ComponentFixture<SimpleAuthDoneComponent>;
  let service: SimpleAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleAuthDoneComponent],
      providers: [SimpleAuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleAuthDoneComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SimpleAuthService);
  });

  it('component has been created', () => {
    expect(component.needsLogin).toBeTruthy();
  });

  it('returns false when the user is not authenticated', () => {
    fixture.detectChanges();
    expect(
      fixture.debugElement
        .query(By.css('span'))
        .nativeElement.textContent.trim()
    ).toBe('NotAuthenticated');
  });

  it('returns true when the user is authenticated', () => {
    vi.spyOn(service, 'isAuthenticated').mockReturnValue(of(true));
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
