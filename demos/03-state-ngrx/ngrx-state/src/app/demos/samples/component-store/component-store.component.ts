import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-component-store',
    templateUrl: './component-store.component.html',
    styleUrls: ['./component-store.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class ComponentStoreComponent { }