import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-http-tests-bs',
    templateUrl: './http-tests-bs.component.html',
    styleUrls: ['./http-tests-bs.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class HttpTestsBsComponent {

}
