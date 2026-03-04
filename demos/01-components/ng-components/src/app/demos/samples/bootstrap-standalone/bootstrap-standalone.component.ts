import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-bootstrap-standalone',
  templateUrl: './bootstrap-standalone.component.html',
  styleUrls: ['./bootstrap-standalone.component.scss'],
  imports: [MarkdownRendererComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapStandaloneComponent { }

