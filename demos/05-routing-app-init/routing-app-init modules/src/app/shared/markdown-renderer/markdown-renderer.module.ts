import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownRendererComponent } from './markdown-renderer.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [MarkdownRendererComponent],
  exports: [MarkdownRendererComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    MatExpansionModule,
  ]
})
export class MarkdownRendererModule { }
