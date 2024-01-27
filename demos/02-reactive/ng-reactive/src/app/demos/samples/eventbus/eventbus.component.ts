import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-eventbus',
  templateUrl: './eventbus.component.html',
  styleUrls: ['./eventbus.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent]
})
export class EventBusComponent { }
