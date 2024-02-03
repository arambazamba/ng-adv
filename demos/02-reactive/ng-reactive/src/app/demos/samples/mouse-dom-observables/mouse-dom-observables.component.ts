import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { BoxedDirective, CenteredDirective, ColumnDirective } from 'src/app/shared/ux-lib/formatting/formatting-directives';

@Component({
  selector: 'app-mouse-dom-observables',
  templateUrl: './mouse-dom-observables.component.html',
  styleUrls: ['./mouse-dom-observables.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatButton,
    BoxedDirective,
    ColumnDirective,
    CenteredDirective
  ],
})
export class MouseDomObservablesComponent {
  @ViewChild('signPad') signPad: ElementRef | undefined;
  result: { X: number; Y: number } = { X: -1, Y: -1 };
  cx: CanvasRenderingContext2D | null = null;

  subscribeMouse() {
    this.captureEvents();
  }

  captureEvents() {
    if (!!this.signPad) {
      const canvasEl: HTMLCanvasElement = this.signPad.nativeElement;
      const rect = canvasEl.getBoundingClientRect();

      // set the internal canvas to the correct aspect ratio of the element
      this.cx = canvasEl.getContext('2d');
      if (this.cx) {
        this.cx.canvas.width = rect.width;
        this.cx.canvas.height = rect.height;
        this.cx.lineWidth = 2;
        this.cx.lineCap = 'round';

        // this will capture all mousedown events from the canvas element
        const mouse$ = fromEvent(canvasEl, 'mousedown').pipe(
          switchMap((e) => {
            // after a mouse down, we'll record all mouse moves
            return fromEvent(canvasEl, 'mousemove').pipe(
              // stop once the user releases the mouse
              // this will trigger a 'mouseup' event
              takeUntil(fromEvent(canvasEl, 'mouseup')),
              // stop once the mouse leaves the canvas (mouseleave event)
              takeUntil(fromEvent(canvasEl, 'mouseleave')),
              // pairwise lets us get the previous value to draw a line from
              // the previous point to the current point
              pairwise()
            );
          })
        );

        mouse$.subscribe((res: [Event, Event]) => {
          const rectangle = this.signPad?.nativeElement.getBoundingClientRect();

          // previous and current position with the offset
          var evtA = res[0] as MouseEvent;
          var evtB = res[1] as MouseEvent;
          const prevPos = {
            x: evtA.clientX - rectangle.left,
            y: evtA.clientY - rectangle.top,
          };

          const currentPos = {
            x: evtB.clientX - rectangle.left,
            y: evtB.clientY - rectangle.top,
          };

          // do the actual drawing
          this.drawOnCanvas(prevPos, currentPos);
        });
      }
    }
  }

  private drawOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) {
    if (!this.cx) {
      return;
    }

    if (
      Math.abs(prevPos.x - currentPos.x) > 0 ||
      Math.abs(prevPos.y - currentPos.y) > 0
    ) {
      this.cx.beginPath();
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
      this.cx.closePath();

      this.result.X = currentPos.x;
      this.result.Y = currentPos.y;
    }
  }
}
