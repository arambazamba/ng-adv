import { Component, OnInit } from '@angular/core';
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
  constructor(private ts: TaskService) { }

  // Classic subscribe Pattern
  tasks: TaskItem[] = [];

  // Reactive declarative Approach using async pipe
  tasks$ = this.ts.getTasks().pipe(tap((data) => console.log("getting data from service:", data)));

  completed$: Observable<TaskItem> = this.tasks$.pipe(
    mergeMap((tasks: TaskItem[]) => tasks),
    filter((t) => t.completed)
  );

  ngOnInit() {
    this.ts.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
}
