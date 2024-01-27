import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DemoService } from '../../demo-base/demo.service';
import { AsyncPipe } from '@angular/common';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';

@Component({
    selector: 'app-action-streams',
    templateUrl: './action-streams.component.html',
    styleUrls: ['./action-streams.component.scss'],
    standalone: true,
    imports: [MatToolbar, MatToolbarRow, MatFormField, MatInput, FormsModule, ReactiveFormsModule, MatCard, MatCardHeader, MatCardTitle, MatCardContent, AsyncPipe]
})
export class ActionStreamsComponent {
  ds = inject(DemoService);
  demos$ = this.ds.getItems();
  filter$ = new FormControl<string>('', { nonNullable: true });

  vm$ = combineLatest([
    this.demos$,
    this.filter$.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([demos, filter]) => {
      return filter != ''
        ? demos.filter((d) =>
          d.title.toLowerCase().includes(filter.toLowerCase())
        )
        : demos;
    })
  );
}
