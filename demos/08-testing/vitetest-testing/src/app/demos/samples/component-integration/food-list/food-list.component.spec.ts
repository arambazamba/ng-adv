import { DebugElement, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FoodServiceBS } from '../../food/food.service-bs';
import { FoodRowComponent } from '../food-row/food-row.component';
import { FoodListComponent } from './food-list.component';

describe('Component - Integration Test', () => {
  let foodServiceSpy: any;
  const foodData = [
    { name: 'Pad Thai', rating: 5 },
    { name: 'Butter Chicken', rating: 5 },
    { name: 'Cannelloni', rating: 4 },
    { name: 'Cordon Bleu', rating: 2 },
  ];

  const deleteItem = { id: 4, name: 'Cordon Bleu', rating: 2 };

  let fixture: ComponentFixture<FoodListComponent>;
  let comp: FoodListComponent;
  let de: DebugElement;
  let foodSignal: ReturnType<typeof signal<typeof foodData>>;

  beforeEach(async () => {
    foodSignal = signal(foodData);
    foodServiceSpy = {
      getFood: vi.fn().mockReturnValue(foodSignal.asReadonly()),
      deleteFood: vi.fn()
    };

    await TestBed.configureTestingModule({
      providers: [{ provide: FoodServiceBS, useValue: foodServiceSpy }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(FoodListComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.autoDetectChanges();
  });

  it('should render each FoodItem as FoodItemRow', () => {
    const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(4);
    expect(rows[0].componentInstance.food().name).toEqual('Pad Thai');
  });

  it('should have three rows when an item is deleted', () => {
    vi.spyOn(comp, 'deleteFood');
    const deRow = de.query(By.directive(FoodRowComponent));
    const row = deRow.componentInstance;
    row.delete.emit(deleteItem);

    expect(comp.deleteFood).toHaveBeenCalledWith(deleteItem);
  });
});
