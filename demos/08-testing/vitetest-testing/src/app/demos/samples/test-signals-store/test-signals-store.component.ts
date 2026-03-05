import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-test-signals-store',
    changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MarkdownRendererComponent],
  templateUrl: './test-signals-store.component.html',
  styleUrl: './test-signals-store.component.scss'
})
export class TestSignalsStoreComponent {

}
