import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { of, startWith } from 'rxjs';
import { MarkdownRendererModule } from 'src/app/shared/markdown-renderer/markdown-renderer.module';

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [AsyncPipe, MarkdownRendererModule],
  templateUrl: './rxjs-interop.component.html',
  styleUrl: './rxjs-interop.component.scss'
})
export class RxjsInteropComponent {
  amount$ = of(10).pipe(startWith(0));
  amount = toSignal(this.amount$, { initialValue: 0 });
}