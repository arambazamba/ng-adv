import { Component, OnInit } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-auth-guard',
    templateUrl: './auth-guard.component.html',
    styleUrls: ['./auth-guard.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class AuthGuardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
