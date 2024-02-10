import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-cypress',
    templateUrl: './cypress.component.html',
    styleUrls: ['./cypress.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class CypressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
