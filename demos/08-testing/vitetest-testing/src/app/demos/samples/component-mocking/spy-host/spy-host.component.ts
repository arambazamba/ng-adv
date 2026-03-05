import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UseSpyComponent } from '../use-spy/use-spy.component';
import { MarkdownRendererComponent } from '../../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-spy-host',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './spy-host.component.html',
    styleUrls: ['./spy-host.component.scss'],
    imports: [MarkdownRendererComponent, UseSpyComponent]
})
export class SpyHostComponent {

}
