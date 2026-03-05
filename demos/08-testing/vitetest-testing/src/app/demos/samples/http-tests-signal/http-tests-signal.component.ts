import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-http-tests-signal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './http-tests-signal.component.html',
    styleUrls: ['./http-tests-signal.component.scss'],
    imports: [MarkdownRendererComponent]
})
export class HttpTestsSignalComponent {

}
