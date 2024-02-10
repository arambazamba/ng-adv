import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-ngrx-reducers',
    templateUrl: './ngrx-reducers.component.html',
    styleUrls: ['./ngrx-reducers.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class NgrxReducersComponent {

}
