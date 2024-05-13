
import { Component } from '@angular/core';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [MarkdownRendererComponent],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
})
export class StandaloneComponent { }

