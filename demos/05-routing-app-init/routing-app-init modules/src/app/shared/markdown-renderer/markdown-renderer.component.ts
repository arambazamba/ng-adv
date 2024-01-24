import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrls: ['./markdown-renderer.component.scss'],
})
export class MarkdownRendererComponent {
  @Input() md = '';
  panelOpenState = true;

  getMarkdown(): string {
    return `${environment.markdownPath}${this.md}.md`;
  }
}
