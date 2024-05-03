import { Component } from '@angular/core';
import { MatSelectFilterComponent } from 'src/app/shared/ux-lib/select-filter/mat-select-filter.component';
import { FilterItem } from './filter-item.model';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-select-filter-host',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSelectFilterComponent,
    MatSelectModule,
    MatFormFieldModule,
    NgFor
  ],
  templateUrl: './select-filter-host.component.html',
  styleUrl: './select-filter-host.component.scss'
})
export class SelectFilterHostComponent {

  allPersons: FilterItem[] = [];
  filteredPersons: FilterItem[] = [];
  fcPerson = new FormControl();

  ngOnInit() {
    this.allPersons = this.generateUniqueUsers(100);
  }

  generateUniqueUsers = (count: number): FilterItem[] => {
    const users: FilterItem[] = [];
    for (let i = 1; i <= count; i++) {
      users.push({ id: i, name: `User ${i}` });
    }
    return users;
  };

}
