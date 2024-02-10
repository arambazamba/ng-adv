import { Component } from '@angular/core';
import { UseSpyComponent } from '../use-spy/use-spy.component';
import { MarkdownRendererComponent } from '../../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-spy-host',
    templateUrl: './spy-host.component.html',
    styleUrls: ['./spy-host.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, UseSpyComponent]
})
export class SpyHostComponent {

}
