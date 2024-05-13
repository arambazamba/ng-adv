import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Observable, Subscription } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { TaskItem } from '../../tasks/task-item.model';
import { TaskService } from '../../tasks/task.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatProgressBar,
    MatFormField,
    MatInput,
    FormsModule,
    AsyncPipe,
    JsonPipe,
  ],
})
export class AsyncPipeComponent implements OnInit {
  ts = inject(TaskService);
  taskSubscription: Subscription | null = null;

  // Classic imperative subscribe pattern the uses ngOnInit and subscribe
  tasks: TaskItem[] = [];

  ngOnInit() {
    // this subscribe has to be unsubscribed in ngOnDestroy
    this.taskSubscription = this.ts.getTasks().subscribe((data) => {
      //unwrap the data from the observable
      this.tasks = data;
    });
  }

  // Reactive declarative Approach using async pipe
  // pipe is used to modify the observable stream
  // The $ sign is use to indicate that this is an observable
  tasks$ = this.ts.getTasks().pipe(
    //observable operators: tap is used for debugging and is called a side effect
    tap((data) => console.log("getting data from service:", data))
  );

  completed$: Observable<TaskItem> = this.tasks$.pipe(
    mergeMap((tasks: TaskItem[]) => tasks),
    filter((t) => t.completed)
  );

  ngOnDestroy() {
    // unsubscribe from the observable
    this.taskSubscription?.unsubscribe();
  }
}
