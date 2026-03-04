import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KpiComponent } from './kpi/kpi.component';
import { ListComponent } from './list/list.component';

@Component({
    selector: 'app-stateful',
    templateUrl: './stateful.component.html',
    styleUrls: ['./stateful.component.scss'],
    imports: [
        ListComponent,
        KpiComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatefulComponent { }
