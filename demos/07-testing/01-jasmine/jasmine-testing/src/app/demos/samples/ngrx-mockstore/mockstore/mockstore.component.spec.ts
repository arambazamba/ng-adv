import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DemoState } from '../../../state/demos.reducer';
import { MockstoreComponent } from './mockstore.component';
import { mockstoreData } from './mockstore.data';


describe('MockstoreComponent', () => {
  let component: MockstoreComponent;
  let fixture: ComponentFixture<MockstoreComponent>;
  let mockStore: MockStore<DemoState>;
  const initialState = mockstoreData;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [MockstoreComponent],
    providers: [provideMockStore({ initialState })]
}).compileComponents();

    fixture = TestBed.createComponent(MockstoreComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 2 demos', () => {
    component.demos.subscribe(demos => {
      expect(demos.length).toBe(2);
    });
  });

  it('should be display 2 demos', () => {
    fixture.autoDetectChanges();
    const els = fixture.debugElement.queryAll(By.css('.underlined'));
    expect(els.length).toBe(2);
  });

});
