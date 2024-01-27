import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-marble-testing',
    templateUrl: './marble-testing.component.html',
    styleUrls: ['./marble-testing.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class MarbleTestingComponent {
}
