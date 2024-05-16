import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialAsyncComponent } from './material-async.component';

describe('MaterialAsyncComponent', () => {
  let fixture: ComponentFixture<MaterialAsyncComponent>;
  let component: MaterialAsyncComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          MaterialAsyncComponent,
          MarkdownModule.forRoot(),
        ],
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
})
