import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-component-input-signals',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MarkdownRendererComponent],
    templateUrl: './component-input-signals.component.html',
    styleUrl: './component-input-signals.component.scss'
})
export class ComponentInputSignalsComponent {

}
