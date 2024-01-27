import { Component } from '@angular/core';
import { KpiComponent } from './kpi/kpi.component';
import { ListComponent } from './list/list.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-stateful',
    templateUrl: './stateful.component.html',
    styleUrls: ['./stateful.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        ListComponent,
        KpiComponent,
    ],
})
export class StatefulComponent { }
