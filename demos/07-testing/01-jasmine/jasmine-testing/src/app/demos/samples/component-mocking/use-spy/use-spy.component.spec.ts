import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { UseSpyComponent } from './use-spy.component';
import { MatCardModule } from '@angular/material/card';

describe('UseMockComponent with MockAuth Service', () => {
  let spy: any;
  let comp: UseSpyComponent;
  let fixture: ComponentFixture<UseSpyComponent>;

  beforeEach(() => {
    spy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    spy.isAuthenticated.and.returnValue(true);

    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [UseSpyComponent],
      providers: [{ provide: AuthService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(UseSpyComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should return Authenticated true', () => {
    expect(comp.loggedIn).toBe(true);
  });

  it('should have the correct login state on the Template', () => {
    expect(fixture.nativeElement.querySelector('#auth').textContent).toContain(
      'true'
    );
  });
});
