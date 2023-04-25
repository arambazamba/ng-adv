import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RatingPipe } from '../../pipe/rating.pipe';
import { FoodRowComponent } from './food-row.component';

describe('Component -Integration Test - Food Row', () => {
  let fixture: ComponentFixture<FoodRowComponent>;
  let component: FoodRowComponent;
  let deleteFld: ElementRef;
  let editFld: ElementRef;

  const food = { id: 1, name: 'Pad Thai', rating: 5 };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodRowComponent],
    });
    fixture = TestBed.createComponent(FoodRowComponent);
    component = fixture.componentInstance;
    deleteFld = fixture.debugElement.query(By.css('#deleteFld'));
    editFld = fixture.debugElement.query(By.css('#editFld'));
    fixture.componentInstance.food = food;
    fixture.detectChanges();
  });

  // Does it make sense to test this?
  it('should have the correct food item', () => {
    expect(fixture.componentInstance.food?.name).toEqual('Pad Thai');
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

  it('should render the food namen when food is changed', () => {
    component.food = { id: 2, name: 'Wiener Schnitzel', rating: 5 };
    fixture.detectChanges();
    // Do one of the tests below
    expect(fixture.nativeElement.querySelector('#itemName').textContent
    ).toContain('Wiener Schnitzel');
  });

  it('should trigger delete', () => {
    expect(deleteFld).toBeTruthy();

    spyOn(component.delete, 'emit');
    deleteFld.nativeElement.click();
    expect(component.delete.emit).toHaveBeenCalled();
  });

  it('should trigger edit', () => {
    expect(editFld).toBeTruthy();

    spyOn(component.edit, 'emit');
    component.editFood();
    expect(component.edit.emit).toHaveBeenCalledWith(food);
  });
});
