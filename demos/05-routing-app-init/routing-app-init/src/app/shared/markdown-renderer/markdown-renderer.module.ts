import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownRendererComponent } from './markdown-renderer.component';

@NgModule({
  declarations: [MarkdownRendererComponent],
  exports: [MarkdownRendererComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    MatExpansionModule,
  ],
})
export class MarkdownRendererModule { }
