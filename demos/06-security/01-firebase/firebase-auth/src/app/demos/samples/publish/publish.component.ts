import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-publish',
    templateUrl: './publish.component.html',
    styleUrls: ['./publish.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class PublishComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
