import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-app-auth',
    templateUrl: './app-auth.component.html',
    styleUrls: ['./app-auth.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class AppAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
