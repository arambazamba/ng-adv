import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../material.module';
import { MaterialAsyncComponent } from './material-async.component';

describe('MaterialAsyncComponent', () => {
  let fixture: ComponentFixture<MaterialAsyncComponent>;
  let component: MaterialAsyncComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MaterialAsyncComponent],
        imports: [MaterialModule, BrowserAnimationsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 tags', () => {
    fixture.detectChanges();
    let tags = fixture.nativeElement.querySelectorAll('.mat-mdc-tab');
    expect(tags.length).toBe(3);
  });

  it('should show display the roles of giro when the second tab is clicked', (done) => {
    fixture.detectChanges();
    let tags = fixture.nativeElement.querySelectorAll('.mat-mdc-tab');
    tags[1].click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let tabBody = fixture.nativeElement.querySelector('.mat-mdc-tab-body-content');
      done();
      expect(tabBody.innerHTML).toContain('Giro');
    });
  });
})
