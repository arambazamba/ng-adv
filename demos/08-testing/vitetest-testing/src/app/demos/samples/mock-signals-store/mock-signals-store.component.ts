import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-mock-signals-store',
    changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MarkdownRendererComponent],
  templateUrl: './mock-signals-store.component.html',
  styleUrl: './mock-signals-store.component.scss'
})
export class MockSignalsStoreComponent {

}
