import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-code-splitting',
    templateUrl: './code-splitting.component.html',
    styleUrls: ['./code-splitting.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class CodeSplittingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
