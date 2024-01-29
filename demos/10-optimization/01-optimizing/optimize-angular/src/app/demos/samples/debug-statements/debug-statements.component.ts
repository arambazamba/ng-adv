import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-debug-statements',
    templateUrl: './debug-statements.component.html',
    styleUrls: ['./debug-statements.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
    ],
})
export class DebugStatementsComponent implements OnInit {
  constructor() {}

  msg = 'Debugging Angular is cool';

  items = ['A', 'B', 'C'];

  ngOnInit(): void {}
}
