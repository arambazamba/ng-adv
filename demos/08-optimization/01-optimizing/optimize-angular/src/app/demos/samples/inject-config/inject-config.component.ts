import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../shared/config/config.service';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-inject-config',
    templateUrl: './inject-config.component.html',
    styleUrls: ['./inject-config.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
    ],
})
export class InjectConfigComponent implements OnInit {
  constructor(cs: ConfigService) {
    this.title = cs.cfg?.title || '';
  }

  title = '';

  ngOnInit(): void { }
}
