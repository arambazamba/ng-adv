import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DirectiveComponent } from '../directive.component';
import { MarkdownRendererComponent } from '../../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-directive-host',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './directive-host.component.html',
    styleUrls: ['./directive-host.component.scss'],
    imports: [MarkdownRendererComponent, DirectiveComponent]
})
export class DirectiveHostComponent {

}
