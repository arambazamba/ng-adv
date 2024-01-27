import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-feature-module-state',
    templateUrl: './feature-module-state.component.html',
    styleUrls: ['./feature-module-state.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class FeatureModuleStateComponent {

}
