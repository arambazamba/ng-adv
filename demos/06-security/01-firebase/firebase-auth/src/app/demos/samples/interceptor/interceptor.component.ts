import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent]
})
export class InterceptorComponent { }
