import { Component } from '@angular/core';
import { MatSelectFilterComponent } from 'src/app/shared/ux-lib/select-filter/mat-select-filter.component';

@Component({
  selector: 'app-select-filter-host',
  standalone: true,
  imports: [MatSelectFilterComponent],
  templateUrl: './select-filter-host.component.html',
  styleUrl: './select-filter-host.component.scss'
})
export class SelectFilterHostComponent {

}
