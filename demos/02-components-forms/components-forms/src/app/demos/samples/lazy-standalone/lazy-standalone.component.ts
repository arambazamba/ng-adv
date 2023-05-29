import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownRendererModule } from 'src/app/shared/markdown-renderer/markdown-renderer.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lazy-standalone',
  standalone: true,
  imports: [CommonModule, MarkdownModule, MarkdownRendererModule, RouterModule],
  templateUrl: './lazy-standalone.component.html',
  styleUrls: ['./lazy-standalone.component.scss'],
})
export class LazyStandaloneComponent {
  constructor() { }
}
