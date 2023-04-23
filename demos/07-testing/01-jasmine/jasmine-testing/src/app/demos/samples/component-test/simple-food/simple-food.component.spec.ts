import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { FoodService } from '../../food/food.service';
import { foodData, serviceResult } from './simple-food-component.data';
import { SimpleFoodComponent } from './simple-food.component';

describe('Component - Spy - FoodComponent:', () => {
  let spy: any;
  let component: SimpleFoodComponent;
  let fixture: ComponentFixture<SimpleFoodComponent>;

  beforeEach(() => {
    spy = jasmine.createSpyObj(['getFood', 'deleteFood']);
    spy.getFood.and.returnValue(of(foodData))

    TestBed.configureTestingModule({
      imports: [MatCardModule, NoopAnimationsModule],
      declarations: [SimpleFoodComponent],
      providers: [{ provide: FoodService, useValue: spy }],
    });

    fixture = TestBed.createComponent(SimpleFoodComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should call getItems to subscribe data', () => {
    expect(component.food.length).toBe(4)

    // you can access the html using fixture.nativeElement.innerHTML
    let html = fixture.nativeElement.innerHTML as HTMLElement;
    console.log(html);
  })

  it('should have the correct food items on the Template', () => {
    let divs = fixture.nativeElement.querySelectorAll('.foodrow');
    expect(divs.length).toBe(4);
    expect(divs[2].textContent).toContain('Cannelloni');
  });

  it('removes the item from the list', () => {
    spy.deleteFood.and.returnValue(of(serviceResult));
    const deletedFood = foodData[3];
    component.deleteFood(deletedFood);
    expect(component.food.length).toBe(3);
  });

});
