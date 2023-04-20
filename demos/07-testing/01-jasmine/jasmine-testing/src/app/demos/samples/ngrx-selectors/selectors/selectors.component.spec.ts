import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DemoState } from '../../../state/demos.reducer';
import { mockselectorData } from './mockselector.data';

import { SelectorsComponent } from './selectors.component';
import { By } from '@angular/platform-browser';

describe('SelectorsComponent', () => {
  let component: SelectorsComponent;
  let fixture: ComponentFixture<SelectorsComponent>;
  let mockStore: MockStore<DemoState>;
  const initialState = mockselectorData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorsComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 1 demos', () => {
    component.demos.subscribe(demos => {
      expect(demos.length).toBe(1);
    });
  });

  it('should be display 1 demos', () => {
    fixture.autoDetectChanges();
    const els = fixture.debugElement.queryAll(By.css('.underlined'));
    expect(els.length).toBe(1);
  });
});
