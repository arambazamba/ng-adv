import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-eventbus',
    templateUrl: './eventbus.component.html',
    styleUrls: ['./eventbus.component.scss'],
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventBusComponent { }
