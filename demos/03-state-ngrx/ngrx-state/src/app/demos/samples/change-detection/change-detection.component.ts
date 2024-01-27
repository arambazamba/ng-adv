import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-change-detection',
    templateUrl: './change-detection.component.html',
    styleUrls: ['./change-detection.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class ChangeDetectionComponent { }
