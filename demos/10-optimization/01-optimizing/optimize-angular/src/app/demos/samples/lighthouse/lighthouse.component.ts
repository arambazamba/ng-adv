import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-lighthouse',
    templateUrl: './lighthouse.component.html',
    styleUrls: ['./lighthouse.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class LighthouseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
