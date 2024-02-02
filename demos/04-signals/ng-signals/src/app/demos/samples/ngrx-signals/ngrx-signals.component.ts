import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-ngrx-signals',
    templateUrl: './ngrx-signals.component.html',
    styleUrls: ['./ngrx-signals.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class NgrxSignalsComponent {

}
