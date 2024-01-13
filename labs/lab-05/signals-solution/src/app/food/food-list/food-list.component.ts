import { Component, EventEmitter, Input, Output, SimpleChanges, WritableSignal } from '@angular/core';
import { FoodItem } from '../food.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent {
  @Input({ required: true }) food !: FoodItem[];
  @Output() onFoodSelected: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  displayedColumns: string[] = ['id', 'name', 'price', 'calories'];
  dataSource: MatTableDataSource<FoodItem> = new MatTableDataSource<FoodItem>([]);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['food']) {
      this.dataSource = new MatTableDataSource(changes['food'].currentValue);
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectFood(p: FoodItem) {
    this.onFoodSelected.emit(p);
  }
}
