import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-signals-event-bus',
    templateUrl: './signals-event-bus.component.html',
    styleUrls: ['./signals-event-bus.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class SignalsEventBusComponent { }
