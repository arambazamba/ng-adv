import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DemoFacade } from '../../../state/demo.facade';
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
  df = inject(DemoFacade);
  fcFilter = new FormControl();

  ngOnInit() {
    this.fcFilter.valueChanges.pipe(debounceTime(350)).subscribe((filter) => {
      this.df.setFilter(filter);
    });
  }
}
