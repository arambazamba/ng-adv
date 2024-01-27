import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-debounced-search',
    templateUrl: './debounced-search.component.html',
    styleUrls: ['./debounced-search.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatFormField,
        MatInput,
        FormsModule,
        ReactiveFormsModule,
        AsyncPipe,
    ],
})
export class DebouncedSearchComponent {
  searchTerm: FormControl = new FormControl('');
  searched = this.searchTerm.valueChanges.pipe(
    debounceTime(750),
    tap((val) => {
      console.log('searched for', val)
    }),
  );
}
