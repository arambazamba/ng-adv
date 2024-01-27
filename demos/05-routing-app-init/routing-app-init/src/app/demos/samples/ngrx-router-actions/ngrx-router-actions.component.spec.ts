import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxRouterActionsComponent } from './ngrx-router-actions.component';

describe('NgrxRouterActionsComponent', () => {
  let component: NgrxRouterActionsComponent;
  let fixture: ComponentFixture<NgrxRouterActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [NgrxRouterActionsComponent]
});
    fixture = TestBed.createComponent(NgrxRouterActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
