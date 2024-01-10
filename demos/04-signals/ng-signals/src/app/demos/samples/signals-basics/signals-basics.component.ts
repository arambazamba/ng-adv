import { Component, Injector, computed, effect, inject, signal } from '@angular/core';
import { Topic } from './topic.model';
@Component({
  selector: 'app-signals-basics',
  templateUrl: './signals-basics.component.html',
  styleUrls: ['./signals-basics.component.scss']
})
export class SignalsBasicsComponent {
  injector = inject(Injector)
  netAmount = signal<number>(0);
  tax = signal(0.2).asReadonly();
  grossAmount = computed(() => this.netAmount() * (1 + this.tax()));
  topic = signal<Topic>({ name: 'Angular Signals', likes: 0 });

  constructor() {
    effect(() => {
      console.log('totalAmount changed', this.netAmount());
      console.log('grossAmount changed', this.grossAmount());
    });
  }

  logLikes() {
    effect(() => {
      console.log('there was a like', this.topic());
    }, { injector: this.injector });
  }

  updateAmount() {
    this.netAmount.set(100);
  }

  addAmount() {
    this.netAmount.update(curr => curr + 10);
  }

  likeTopic() {
    this.topic.update(curr => {
      curr.likes++;
      return curr;
    });
  }
}
