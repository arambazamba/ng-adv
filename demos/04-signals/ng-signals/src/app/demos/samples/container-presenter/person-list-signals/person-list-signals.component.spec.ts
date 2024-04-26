import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListSignalsComponent } from './person-list-signals.component';

describe('PersonListSignalsComponent', () => {
  let component: PersonListSignalsComponent;
  let fixture: ComponentFixture<PersonListSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonListSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonListSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
