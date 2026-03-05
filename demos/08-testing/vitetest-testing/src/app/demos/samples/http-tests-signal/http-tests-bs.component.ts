import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-http-tests-bs',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './http-tests-bs.component.html',
    styleUrls: ['./http-tests-bs.component.scss'],
    imports: [MarkdownRendererComponent]
})
export class HttpTestsBsComponent {

}
