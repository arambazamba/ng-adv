import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-preloading-ngrx',
    templateUrl: './preloading-ngrx.component.html',
    styleUrls: ['./preloading-ngrx.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class PreloadingNgrxComponent {

}
