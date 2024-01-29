import { Component } from '@angular/core';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-optimized-controls',
  standalone: true,
  imports: [MarkdownRendererComponent],
  templateUrl: './optimized-controls.component.html',
  styleUrl: './optimized-controls.component.scss'
})
export class OptimizedControlsComponent {

}
