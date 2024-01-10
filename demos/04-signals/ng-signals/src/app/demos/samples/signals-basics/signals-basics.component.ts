import { Component, Injector, computed, effect, inject, signal } from '@angular/core';
import { of, startWith } from 'rxjs';
@Component({
  selector: 'app-signals-basics',
  templateUrl: './signals-basics.component.html',
  styleUrls: ['./signals-basics.component.scss']
})
export class SignalsBasicsComponent {
  injector = inject(Injector)
  netAmount = signal<number>(0);
  tax = signal(0.2);
  grossAmount = computed(() => this.netAmount() * (1 + this.tax()));
  runningAmount = signal(0);
  amount$ = of(10).pipe(startWith(0));

  constructor() {
    effect(() => {
      console.log('totalAmount changed', this.netAmount());
    });
  }

  logValue() {
    effect(() => {
      console.log('totalAmount changed - logValue', this.netAmount());
    }, { injector: this.injector });
  }

  updateAmount() {
    this.netAmount.set(100);
  }

  addAmount() {
    this.netAmount.update(curr => curr + 10);
  }
}
