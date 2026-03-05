import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SimpleFoodComponent } from './simple-food/simple-food.component';

@Component({
    selector: 'app-component-test',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './component-test.component.html',
    styleUrls: ['./component-test.component.scss'],
    imports: [SimpleFoodComponent]
})
export class ComponentTestComponent {

}
