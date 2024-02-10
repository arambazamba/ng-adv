import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-mock-store',
    templateUrl: './mock-store.component.html',
    styleUrls: ['./mock-store.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class MockStoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
