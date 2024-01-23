import { Component, Input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrls: ['./markdown-renderer.component.scss'],
  standalone: true,
  imports: [
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MarkdownComponent,
  ],
})
export class MarkdownRendererComponent {
  @Input() md: string = '';
  panelOpenState = true;

  getMarkdown(): string {
    return `${environment.markdownPath}${this.md}.md`;
  }
}
