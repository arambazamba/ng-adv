import { Component } from '@angular/core';
import { MockstoreComponent } from './mockstore/mockstore.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-ngrx-mockstore',
    templateUrl: './ngrx-mockstore.component.html',
    styleUrls: ['./ngrx-mockstore.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MockstoreComponent]
})
export class NgrxMockstoreComponent {

}
