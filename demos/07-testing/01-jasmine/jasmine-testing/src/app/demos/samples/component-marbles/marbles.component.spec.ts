import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { MarblesComponent } from './marbles.component';
import { PersonService } from './person.service';
import { EMPTY, of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('MaterialAsyncComponent', () => {
  let fixture: ComponentFixture<MarblesComponent>;
  let component: MarblesComponent;
  let testScheduler: TestScheduler;
  let spy: any;

  beforeEach(() => {
    spy = jasmine.createSpyObj('PersonService', ['getPersons']);
    spy.getPersons.and.returnValue(of(EMPTY));
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      declarations: [MarblesComponent],
      imports: [],
      providers: [{ provide: PersonService, useValue: spy }],
    });
    fixture = TestBed.createComponent(MarblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should complete destroy', () => {
    testScheduler.run((helpers) => {
      const { expectObservable } = helpers;
      const expected = '|';
      component.ngOnDestroy();
      expectObservable(component.destroy$).toBe(expected);
    });
  });

  it('should render the correct values when 3 marbles are emitted', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const source$ = cold('a--b-c|', { a: 'Soi', b: 'Giro', c: 'Cleo' });
      spy.getPersons.and.returnValue(source$);
      component.ngOnInit();
      fixture.detectChanges();
      const boxes = fixture.debugElement.queryAll(By.css('.box'));
      expect(boxes.length).toBe(2);
    });
  });
})
