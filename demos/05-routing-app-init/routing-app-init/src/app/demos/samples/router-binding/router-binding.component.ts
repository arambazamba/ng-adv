import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-router-binding',
    templateUrl: './router-binding.component.html',
    styleUrls: ['./router-binding.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class RouterBindingComponent {

}
