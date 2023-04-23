import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { MarblesComponent } from './marbles.component';

describe('MaterialAsyncComponent', () => {
  let fixture: ComponentFixture<MarblesComponent>;
  let component: MarblesComponent;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      declarations: [MarblesComponent],
      imports: [],
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

      // let spy = spyOn(component, 'getMarbles').and.returnValue(source$);

    });
  });

  // it('should show display the roles of giro when the second tab is clicked', (done) => {
  //   fixture.detectChanges();
  //   let tags = fixture.nativeElement.querySelectorAll('.mat-mdc-tab');
  //   tags[1].click();

  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges();
  //     let tabBody = fixture.nativeElement.querySelector('.mat-mdc-tab-body-content');
  //     done();
  //     expect(tabBody.innerHTML).toContain('Giro');
  //   });
  // });
})
