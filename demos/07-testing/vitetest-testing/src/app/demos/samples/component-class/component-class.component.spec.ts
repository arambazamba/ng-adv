import { ComponentClassComponent } from './component-class.component';
import { FoodItem } from '../food/food.model';
import { describe, it, expect, beforeEach } from 'vitest';

describe('ComponentClassComponent', () => {
  let component: ComponentClassComponent;

  beforeEach(() => {
    component = new ComponentClassComponent();
  });

  it('should create with initial food items', () => {
    expect(component).toBeTruthy();
    expect(component.food()).toHaveLength(2);
  });

  it('should have correct title', () => {
    expect(component.title).toBe('Food App');
  });

  it('should add food item to list', () => {
    const item: FoodItem = { id: 4, name: 'Blini with Salmon', rating: 1 };
    expect(component.food()).toHaveLength(2);

    component.addFood(item);

    expect(component.food()).toHaveLength(3);
    expect(component.food()[2]).toEqual(item);
  });

  it('should add multiple items', () => {
    const items: FoodItem[] = [
      { id: 5, name: 'Item 1', rating: 3 },
      { id: 6, name: 'Item 2', rating: 4 }
    ];

    items.forEach(item => component.addFood(item));

    expect(component.food()).toHaveLength(4);
  });
});
