import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UseSpyComponent } from '../use-spy/use-spy.component';

@Component({
    selector: 'app-spy-host',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './spy-host.component.html',
    styleUrls: ['./spy-host.component.scss'],
    imports: [UseSpyComponent]
})
export class SpyHostComponent {

}
