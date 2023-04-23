import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PersonService } from './person.service';

@Component({
  selector: 'app-marbles',
  templateUrl: './marbles.component.html',
  styleUrls: ['./marbles.component.scss'],
})
export class MarblesComponent implements OnInit, OnDestroy {

  ps = inject(PersonService)
  destroy$ = new Subject();
  currentPerson: string = '';
  personLog: string[] = [];


  ngOnInit() {
    this.ps.getPersons().pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.currentPerson = data;
      this.personLog.push(data);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
