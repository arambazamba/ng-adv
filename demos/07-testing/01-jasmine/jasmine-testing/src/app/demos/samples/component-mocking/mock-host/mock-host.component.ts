import { Component } from '@angular/core';
import { UseMockComponent } from '../use-mock/use-mock.component';
import { MarkdownRendererComponent } from '../../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-mock-host',
    templateUrl: './mock-host.component.html',
    styleUrls: ['./mock-host.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, UseMockComponent]
})
export class MockHostComponent {

}
