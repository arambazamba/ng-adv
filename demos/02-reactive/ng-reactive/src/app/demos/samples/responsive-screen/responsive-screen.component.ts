import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { NgClass, AsyncPipe, JsonPipe } from '@angular/common';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-responsive-screen',
    templateUrl: './responsive-screen.component.html',
    styleUrls: ['./responsive-screen.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MatCard, MatCardHeader, MatCardTitle, MatCardContent, NgClass, AsyncPipe, JsonPipe]
})
export class ResponsiveScreenComponent {
  breakpointObserver = inject(BreakpointObserver);
  matches = this.breakpointObserver
    .observe(['(min-width: 600px)'])

  class = this.matches.pipe(map((state: BreakpointState) => {
    return state.matches ? 'largeClass' : 'smallClass';
  }));
}
