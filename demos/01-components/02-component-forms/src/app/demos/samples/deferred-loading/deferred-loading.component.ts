import { Component } from '@angular/core';
import { MarkdownRendererModule } from 'src/app/shared/markdown-renderer/markdown-renderer.module';

@Component({
  selector: 'app-deferred-loading',
  standalone: true,
  imports: [MarkdownRendererModule],
  templateUrl: './deferred-loading.component.html',
  styleUrl: './deferred-loading.component.scss'
})
export class DeferredLoadingComponent {

}
