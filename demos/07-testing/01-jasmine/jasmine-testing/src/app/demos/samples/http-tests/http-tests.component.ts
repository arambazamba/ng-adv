import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-http-tests',
    templateUrl: './http-tests.component.html',
    styleUrls: ['./http-tests.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class HttpTestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
