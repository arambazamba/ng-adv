import { Component } from '@angular/core';
import { DemoListComponent } from '../feature-module-state/demo-list/demo-list.component';
import { DemoFilterComponent } from '../feature-module-state/demo-filter/demo-filter.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-ngrx-entity',
    templateUrl: './ngrx-entity.component.html',
    styleUrls: ['./ngrx-entity.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, DemoFilterComponent, DemoListComponent]
})
export class NgrxEntityComponent { }
