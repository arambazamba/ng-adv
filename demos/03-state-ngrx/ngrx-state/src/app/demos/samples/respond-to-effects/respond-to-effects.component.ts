import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-respond-to-effects',
    templateUrl: './respond-to-effects.component.html',
    styleUrls: ['./respond-to-effects.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class RespondToEffectsComponent { }
