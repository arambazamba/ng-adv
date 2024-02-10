import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-simple-service',
    templateUrl: './simple-service.component.html',
    styleUrls: ['./simple-service.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent],
})
export class SimpleServiceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
