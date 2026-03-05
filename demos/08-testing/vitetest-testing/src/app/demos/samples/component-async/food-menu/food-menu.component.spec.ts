import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FoodMenuComponent } from './food-menu.component';

describe('FoodMenuComponent', () => {
  let component: FoodMenuComponent;
  let fixture: ComponentFixture<FoodMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMenuComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodMenuComponent);
    component = fixture.componentInstance;
  });

  it('should have a list of 3 food items (using fake timers)', () => {
    vi.useFakeTimers();
    fixture.detectChanges();
    vi.advanceTimersByTime(200);
    fixture.detectChanges();
    console.log(fixture.debugElement.nativeElement.innerHTML);
    let items = fixture.debugElement.queryAll(By.css('.underlined'));
    expect(items.length).toBe(3);
    vi.useRealTimers();
  });

  it('should have a list of 3 food items (using autoDetectChanges)', () => {
    vi.useFakeTimers();
    fixture.autoDetectChanges();
    vi.advanceTimersByTime(200);
    fixture.detectChanges();
    console.log(fixture.debugElement.nativeElement.innerHTML);
    let items = fixture.debugElement.queryAll(By.css('.underlined'));
    expect(items.length).toBe(3);
    vi.useRealTimers();
  });

  it('should have a list of 3 food items (using whenStable)', async () => {
    fixture.detectChanges();
    await new Promise(resolve => setTimeout(resolve, 250));
    fixture.detectChanges();
    let items = fixture.debugElement.queryAll(By.css('.underlined'));
    console.log(fixture.debugElement.nativeElement.innerHTML);
    expect(items.length).toBe(3);
  });
});
