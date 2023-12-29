import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcMigrationComponent } from './mdc-migration.component';

describe('MdcMigrationComponent', () => {
  let component: MdcMigrationComponent;
  let fixture: ComponentFixture<MdcMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdcMigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdcMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
