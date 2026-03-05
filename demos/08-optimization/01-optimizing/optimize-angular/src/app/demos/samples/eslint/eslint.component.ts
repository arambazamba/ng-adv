import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-eslint',
    templateUrl: './eslint.component.html',
    styleUrls: ['./eslint.component.scss'],
    imports: [MarkdownRendererComponent]
})
export class EslintComponent {

}
