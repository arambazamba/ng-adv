import { ChangeDetectionStrategy, Component, computed, inject, input, NgZone } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MarkdownComponent } from 'ngx-markdown';
import mermaid from 'mermaid';
import { environment } from '../../../environments/environment';
import { RendererStateService } from './renderer-state.service';

@Component({
  selector: 'app-markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrl: './markdown-renderer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MarkdownComponent,
  ]
})
export class MarkdownRendererComponent {
  private state = inject(RendererStateService);
  private ngZone = inject(NgZone);
  md = input.required<string>();
  contentVisible = this.state.visible;
  markdownSrc = computed(() => `${environment.markdownPath}${this.md()}.md`);

  constructor() {
    // Initialize mermaid once
    mermaid.initialize({ startOnLoad: true, theme: 'dark' });
  }

  togglePanel() {
    this.state.toggleVisibility();
  }

  onMarkdownLoad() {
    try {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          mermaid.run();
        }, 100);
      });
    } catch (error) {
      console.error('Error rendering mermaid diagrams:', error);
    }
  }
}
