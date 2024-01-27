import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
  inject
} from '@angular/core';
import { DetectorChildComponent } from './detector-child/detector-child.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-change-detector-ref',
    templateUrl: './change-detector-ref.component.html',
    styleUrls: ['./change-detector-ref.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, DetectorChildComponent],
})
export class ChangeDetectorRefComponent implements AfterViewInit {
  cd = inject(ChangeDetectorRef);
  @ViewChild(DetectorChildComponent) child: DetectorChildComponent | null =
    null;
  produceErr = true;
  handleErr = true;

  ngAfterViewInit(): void {
    let childVal = this.child?.childData;
    if (this.handleErr) {
      this.cd.detectChanges();
    }
    console.log('childVal', childVal);
  }
}
