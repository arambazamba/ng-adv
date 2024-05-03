import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFilterHostComponent } from './select-filter-host.component';

describe('SelectFilterHostComponent', () => {
  let component: SelectFilterHostComponent;
  let fixture: ComponentFixture<SelectFilterHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFilterHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectFilterHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
