import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-component-events',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './component-events.component.html',
    styleUrls: ['./component-events.component.scss'],
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatButtonModule,
    ]
})
export class ComponentEventsComponent {

  count = signal(0);

  incrementCount() {
    this.count.update((c) => c + 1);
  }
}
