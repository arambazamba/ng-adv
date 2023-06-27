import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { TaskItem } from '../../tasks/task-item.model';
import { TaskService } from '../../tasks/task.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss'],
})
export class AsyncPipeComponent implements OnInit {
  ts = inject(TaskService);

  // Classic imperative subscribe pattern the uses ngOnInit and subscribe
  tasks: TaskItem[] = [];

  // Reactive declarative Approach using async pipe
  // pipe is used to modify the observable stream
  tasks$ = this.ts.getTasks().pipe(
    //observable operators: tap is used for debugging and is called a side effect
    tap((data) => console.log("getting data from service:", data))
  );

  completed$: Observable<TaskItem> = this.tasks$.pipe(
    mergeMap((tasks: TaskItem[]) => tasks),
    filter((t) => t.completed)
  );

  ngOnInit() {
    // this subscribe has to be unsubscribed in ngOnDestroy
    this.ts.getTasks().subscribe((data) => {
      //unwrap the data from the observable
      this.tasks = data;
    });
  }
}
