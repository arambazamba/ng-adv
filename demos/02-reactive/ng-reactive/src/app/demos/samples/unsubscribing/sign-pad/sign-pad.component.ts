import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-sign-pad',
  templateUrl: './sign-pad.component.html',
  styleUrls: ['./sign-pad.component.scss'],
})
export class SignPadComponent implements OnDestroy {
  @ViewChild('signPad', { static: true }) canvas: ElementRef | null = null;

  subMouseEvents: Subscription | null = null;
  result: { X: number; Y: number } = { X: 0, Y: 0 };

  ngOnDestroy() {
    this.unsubscribeMouseEvts();
  }

  //used from ngOnDestroy and mouse event
  unsubscribeMouseEvts() {
    if (this.subMouseEvents) {
      this.subMouseEvents.unsubscribe();
      console.log('unsubscribed from Mouse Event');
    }
  }

  subscribeMouseEvts() {
    if (this.canvas) {
      const evtMouse = fromEvent(this.canvas.nativeElement, 'mousemove').pipe(
        tap((data: any) => console.log('original data', data)),
        map((evt: MouseEvent) => {
          return { X: evt.clientX, Y: evt.clientY };
        }),
        tap((data: any) => console.log('modfied data', data))
      );

      this.subMouseEvents = evtMouse.subscribe((point) => {
        this.result = point;
        console.log('Mouse Moved @: ', point);
      });
    }
  }
}
