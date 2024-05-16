
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, inject, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../../../environments/environment';
import { RendererStateService } from './renderer-state.service';

@Component({
  selector: 'app-markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrls: ['./markdown-renderer.component.scss'],
  standalone: true,

  imports: [
    HttpClientModule,
    MarkdownModule,
    MatExpansionModule
  ],
})
export class MarkdownRendererComponent {
  @Input({ required: true }) md = '';
  state = inject(RendererStateService);
  panelOpenState = signal(false);
  isInit = false;

  ngOnInit() {
    this.isInit = true;
    this.panelOpenState.set(this.state.getVisible()());
    this.isInit = false;
  }

  getMarkdown(): string {
    return `${environment.markdownPath}${this.md}.md`;
  }

  setSate(visible: boolean) {
    if (this.isInit == false) {
      this.state.toggleVisible(visible);
      console.log('state:', this.panelOpenState());
    }
  }
}
