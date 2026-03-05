import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-change-detection-profile',
    templateUrl: './change-detection-profile.component.html',
    styleUrls: ['./change-detection-profile.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class ChangeDetectionProfileComponent { }
