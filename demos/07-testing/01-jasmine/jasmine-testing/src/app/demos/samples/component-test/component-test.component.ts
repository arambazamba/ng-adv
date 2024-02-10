import { Component, OnInit } from '@angular/core';
import { SimpleFoodComponent } from './simple-food/simple-food.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-component-test',
    templateUrl: './component-test.component.html',
    styleUrls: ['./component-test.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, SimpleFoodComponent]
})
export class ComponentTestComponent {

}
