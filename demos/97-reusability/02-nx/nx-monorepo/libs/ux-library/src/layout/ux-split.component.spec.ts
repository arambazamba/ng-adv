import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UxSplitComponent } from './ux-split.component';

describe('UxSplitComponent', () => {
  let component: UxSplitComponent;
  let fixture: ComponentFixture<UxSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UxSplitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UxSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
