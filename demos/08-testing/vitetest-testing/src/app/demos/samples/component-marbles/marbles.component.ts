import { Component, DestroyRef, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { PersonService } from './person.service';

@Component({
  selector: 'app-marbles',
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './marbles.component.html',
  styleUrls: ['./marbles.component.scss'],
  imports: [MarkdownRendererComponent]
})
export class MarblesComponent implements OnInit {
  personService = inject(PersonService)
  destroyRef = inject(DestroyRef);
  currentPerson: string = '';
  personLog: string[] = [];

  ngOnInit() {
    this.personService.getPersons().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.currentPerson = data;
      this.personLog.push(data);
    });
  }
}
