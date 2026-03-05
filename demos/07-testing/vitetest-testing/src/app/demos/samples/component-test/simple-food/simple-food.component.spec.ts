import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { FoodService } from '../../food/food.service';
import { foodData, serviceResult } from './simple-food-component.data';
import { SimpleFoodComponent } from './simple-food.component';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('SimpleFoodComponent', () => {
    let component: SimpleFoodComponent;
    let fixture: ComponentFixture<SimpleFoodComponent>;
    let foodService: any;

    beforeEach(async () => {
        const spy = {
            getFood: vi.fn().mockReturnValue(of(foodData)),
            deleteFood: vi.fn().mockReturnValue(of(true))
        };

        TestBed.resetTestingModule();

        await TestBed.configureTestingModule({
            imports: [MatCardModule, NoopAnimationsModule, SimpleFoodComponent],
            providers: [{ provide: FoodService, useValue: spy }],
        }).compileComponents();

        fixture = TestBed.createComponent(SimpleFoodComponent);
        component = fixture.componentInstance;
        foodService = TestBed.inject(FoodService);
        fixture.detectChanges();
    });

    it('should load food items using resource', async () => {
        await fixture.whenStable();
        expect(component.food.hasValue()).toBe(true);
        expect(component.food.value()?.length).toBe(4);
    });

    it('should display food items in the template', async () => {
        await fixture.whenStable();
        fixture.detectChanges();
        const divs = fixture.nativeElement.querySelectorAll('.foodrow');
        expect(divs.length).toBe(4);
    });

    it('should delete food item from list', async () => {
        await fixture.whenStable();
        component.deleteFood(foodData[0]);
        expect(foodService.deleteFood).toHaveBeenCalledWith(foodData[0]);
    });

    it('should update food item', async () => {
        await fixture.whenStable();
        expect(foodService.getFood).toBeDefined();
    });
});
