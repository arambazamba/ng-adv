import { Component } from '@angular/core';
import { DirectiveComponent } from '../directive.component';
import { MarkdownRendererComponent } from '../../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-directive-host',
    templateUrl: './directive-host.component.html',
    styleUrls: ['./directive-host.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, DirectiveComponent]
})
export class DirectiveHostComponent {

}
