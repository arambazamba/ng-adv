import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-auxiliary-routes',
    templateUrl: './auxiliary-routes.component.html',
    styleUrls: ['./auxiliary-routes.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class AuxiliaryRoutesComponent {

}
