import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { BoxedDirective } from '../../../shared/formatting/formatting-directives';

@Component({
  selector: 'app-control-flow',
  imports: [
    MarkdownRendererComponent,
    MatSlideToggleModule,
    ReactiveFormsModule,
    BoxedDirective
  ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlFlowComponent {
  private cdr = inject(ChangeDetectorRef);
  fcDisplay = new FormControl(true);
  dogs: string[] = []

  ngOnInit() {
    setTimeout(() => {
      this.dogs = ["Flora", "Cleo", "Soi", "Giro"]
      this.cdr.markForCheck();
    }, 5000);
  }
}
