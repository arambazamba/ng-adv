import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-debounced-search',
  templateUrl: './debounced-search.component.html',
  styleUrls: ['./debounced-search.component.scss'],
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
