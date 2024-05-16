import { Component, OnInit, OnDestroy, inject, DestroyRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PersonService } from './person.service';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-marbles',
  templateUrl: './marbles.component.html',
  styleUrls: ['./marbles.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent],
})
export class MarblesComponent implements OnInit {
  ps = inject(PersonService)
  destroyRef = inject(DestroyRef);
  currentPerson: string = '';
  personLog: string[] = [];

  ngOnInit() {
    this.ps.getPersons().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.currentPerson = data;
      this.personLog.push(data);
    });
  }
}
