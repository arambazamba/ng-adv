import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownRendererModule } from '../../../shared/markdown-renderer/markdown-renderer.module';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, MarkdownModule, MarkdownRendererModule],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
})
export class StandaloneComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
