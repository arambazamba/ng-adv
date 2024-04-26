import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';
import { PersonEditSignalsComponent } from './person-edit-signals/person-edit-signals.component';
import { PersonListSignalsComponent } from './person-list-signals/person-list-signals.component';
import { PersonService } from './person.service';
import { Person } from './person.model';

@Component({
  selector: 'app-container-presenter-signals',
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    PersonListSignalsComponent,
    PersonEditSignalsComponent
  ],
  templateUrl: './container-presenter-signals.component.html',
  styleUrl: './container-presenter-signals.component.scss'
})
export class ContainerPresenterSignalsComponent {
  ps = inject(PersonService);

  persons = toSignal(this.ps.getPersons(), { initialValue: [] });
  current = signal<Person | null>(null);

  onPersonSelected(p: Person) {
    console.log('Person selected:', p);
    this.current.set({ ...p });
  }

  onPersonSaved(p: Person) {
    console.log('mock saving to service:', p);
    const existing: Person | undefined = this.persons().find((i) => i.id == p.id);
    if (existing) {
      Object.assign(existing, p);
    } else {
      this.persons().push(p);
    }
    this.current.set(null);
    console.log('Persons array after save', this.persons);
  }
}
