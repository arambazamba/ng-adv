import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SimpleFoodComponent } from './simple-food/simple-food.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-component-test',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './component-test.component.html',
    styleUrls: ['./component-test.component.scss'],
    imports: [MarkdownRendererComponent, SimpleFoodComponent]
})
export class ComponentTestComponent {

}
