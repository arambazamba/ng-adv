import { ElementRef, input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FoodRowComponent } from './food-row.component';

describe('Component -Integration Test - Food Row', () => {
  let fixture: ComponentFixture<FoodRowComponent>;
  let component: FoodRowComponent;
  let deleteFld: ElementRef;
  let editFld: ElementRef;

  const food = { id: 1, name: 'Pad Thai', rating: 5 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodRowComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FoodRowComponent);
    component = fixture.componentInstance;
    deleteFld = fixture.debugElement.query(By.css('#deleteFld'));
    editFld = fixture.debugElement.query(By.css('#editFld'));
    fixture.componentRef.setInput('food', food);
    fixture.detectChanges();
  });

  // Does it make sense to test this?
  it('should have the correct food item', () => {
    expect(fixture.componentInstance.food()?.name).toEqual('Pad Thai');
  });

  // Test for component rendering
  it('should render the food name', () => {
    // Do one of the tests below
    expect(fixture.nativeElement.querySelector('#itemName').textContent
    ).toContain('Pad Thai');

    expect(
      fixture.debugElement.query(By.css('#itemName')).nativeElement.textContent
    ).toContain('Pad Thai');
  });

  it('should render the food name when food is changed', () => {
    fixture.componentRef.setInput('food', { id: 2, name: 'Wiener Schnitzel', rating: 5 });
    fixture.detectChanges();
    // Do one of the tests below
    expect(fixture.nativeElement.querySelector('#itemName').textContent
    ).toContain('Wiener Schnitzel');
  });

  it('should trigger delete', () => {
    expect(deleteFld).toBeTruthy();

    vi.spyOn(component.delete, 'emit');
    deleteFld.nativeElement.click();
    expect(component.delete.emit).toHaveBeenCalled();
  });

  it('should trigger edit', () => {
    expect(editFld).toBeTruthy();

    vi.spyOn(component.edit, 'emit');
    component.editFood();
    expect(component.edit.emit).toHaveBeenCalledWith(food);
  });
});
