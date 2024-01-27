import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-ngrx-data',
    templateUrl: './ngrx-data.component.html',
    styleUrls: ['./ngrx-data.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class NgrxDataComponent { }
