import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-app-state',
    templateUrl: './app-state.component.html',
    styleUrls: ['./app-state.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class AppStateComponent { }
