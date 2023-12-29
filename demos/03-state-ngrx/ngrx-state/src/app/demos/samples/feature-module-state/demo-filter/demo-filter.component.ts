import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DemoFacade } from '../../../state/demo.facade';

@Component({
  selector: 'app-demo-filter',
  templateUrl: './demo-filter.component.html',
  styleUrls: ['./demo-filter.component.scss'],
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
