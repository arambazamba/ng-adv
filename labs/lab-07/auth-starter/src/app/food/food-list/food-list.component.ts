import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { FoodItem } from 'src/app/food/food-item.model';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconAnchor } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-food-list',
    templateUrl: './food-list.component.html',
    styleUrls: ['./food-list.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatFormField,
        MatInput,
        ReactiveFormsModule,
        MatButton,
        MatIcon,
        MatTable,
        MatColumnDef,
        MatHeaderCellDef,
        MatHeaderCell,
        MatCellDef,
        MatCell,
        MatIconAnchor,
        MatTooltip,
        MatHeaderRowDef,
        MatHeaderRow,
        MatRowDef,
        MatRow,
    ],
})
export class FoodListComponent implements OnInit, OnChanges {
  constructor() { }

  @Input()
  food: FoodItem[];
  @Output()
  editSelected: EventEmitter<FoodItem> = new EventEmitter();
  @Output()
  deleteSelected: EventEmitter<FoodItem> = new EventEmitter();

  filter = new FormControl('');

  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'calories',
    'deleteItem',
    'editItem',
  ];
  dataSource: MatTableDataSource<FoodItem> = new MatTableDataSource([]);

  ngOnInit() {
    this.filter.valueChanges.subscribe((filterString) => {
      this.dataSource.filter = filterString.trim().toLowerCase();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.food.currentValue);
    this.dataSource = new MatTableDataSource(changes.food.currentValue);
  }

  addFood() {
    console.log(this.getNextId());
    this.editSelected.emit({
      id: this.getNextId(),
      name: '',
      price: 0,
      calories: 0,
    });
  }

  getNextId(): number {
    return this.food.reduce((acc, f) => (acc = acc > f.id ? acc : f.id), 0) + 1;
  }

  selectFood(p: FoodItem) {
    this.editSelected.emit(p);
  }

  deleteFood(p: FoodItem) {
    this.deleteSelected.emit(p);
  }
}
