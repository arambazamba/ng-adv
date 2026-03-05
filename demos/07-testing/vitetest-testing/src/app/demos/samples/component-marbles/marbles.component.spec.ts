import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { EMPTY, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MarblesComponent } from './marbles.component';
import { PersonService } from './person.service';

describe('MaterialAsyncComponent', () => {
  let fixture: ComponentFixture<MarblesComponent>;
  let component: MarblesComponent;
  let testScheduler: TestScheduler;
  let spy: any;

  beforeEach(async () => {
    spy = { getPersons: vi.fn() };
    spy.getPersons.mockReturnValue(of(EMPTY));
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    await TestBed.configureTestingModule({
      imports: [
        MarblesComponent,
        MarkdownModule.forRoot(),
        BrowserAnimationsModule
      ],
      providers: [
        { provide: PersonService, useValue: spy },
        provideHttpClient()
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(MarblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct values when 3 marbles are emitted', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const source$ = cold('a--b-c|', { a: 'Soi', b: 'Giro', c: 'Cleo' });
      spy.getPersons.mockReturnValue(source$);
      component.ngOnInit();
      fixture.detectChanges();
      const boxes = fixture.debugElement.queryAll(By.css('.box'));
      expect(boxes.length).toBe(2);
    });
  });
})
