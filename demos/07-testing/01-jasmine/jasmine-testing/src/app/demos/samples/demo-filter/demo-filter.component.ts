import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { DemoState } from '../../state/demos.reducer';
import { DemoActions } from '../../state/demos.actions';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-demo-filter',
    templateUrl: './demo-filter.component.html',
    styleUrls: ['./demo-filter.component.scss'],
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
    ],
})
export class DemoFilterComponent implements OnInit {
  constructor(private store: Store<DemoState>) { }

  fcFilter = new FormControl();

  ngOnInit() {
    this.handleFilterChange();
  }

  handleFilterChange() {
    this.fcFilter.valueChanges.pipe(debounceTime(350)).subscribe((filter) => {
      this.store.dispatch(DemoActions.applyFilter(filter));
    });
  }
}
