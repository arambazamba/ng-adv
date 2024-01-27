import { Component, inject } from '@angular/core';
import { DemoService } from '../../demo-base/demo.service';
import { AsyncPipe } from '@angular/common';
import { BorderDirective, CenteredDirective } from '../../../shared/formatting/formatting-directives';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-di-inject',
  templateUrl: './di-inject.component.html',
  styleUrls: ['./di-inject.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent, BorderDirective, CenteredDirective, AsyncPipe]
})
export class DiInjectComponent {
  service = inject(DemoService);
  demos = this.service.getDemos();
}
