import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-ngrx-selectors',
    templateUrl: './ngrx-selectors.component.html',
    styleUrls: ['./ngrx-selectors.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class NgrxSelectorsComponent {

}
