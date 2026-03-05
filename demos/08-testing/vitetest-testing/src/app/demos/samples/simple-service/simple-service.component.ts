import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-simple-service',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './simple-service.component.html',
    styleUrls: ['./simple-service.component.scss'],
    imports: [MarkdownRendererComponent]
})
export class SimpleServiceComponent {

}
