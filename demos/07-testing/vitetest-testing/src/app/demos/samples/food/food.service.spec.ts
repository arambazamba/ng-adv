import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { FoodItem } from './food.model';
import { FoodService } from './food.service';
import { environment } from '../../../../environments/environment';

describe('Service - HttpTest -FoodService', () => {
  let service: FoodService;
  let controller: HttpTestingController;
  let data: FoodItem[] = [];

  beforeEach(() => {
    data = [
      { id: 1, name: 'Pad Thai', rating: 5 },
      { id: 2, name: 'Butter Chicken', rating: 5 },
      { id: 9, name: 'Germknödl', rating: 5, discontinued: true },
    ];

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        FoodService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(FoodService);
    controller = TestBed.inject(HttpTestingController);
  });

  // Verify that there are no pending HTTP requests
  afterEach(() => {
    controller.verify();
  });

  it('should return the expected data', () => {
    service.getFood().subscribe((items) => {
      expect(items).toBeTruthy();
      expect(items.length).toEqual(3);

      const germ = items.find((i) => i.id === 9);
      expect(germ?.name).toBe('Germknödl');
    });

    //check that the correct url was called with the correct method
    const url = `${environment.api}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('GET');

    //flush the mock data
    req.flush(data);

  });

  it('should return only items that are not discontinued', () => {
    service.getAvailableFood().subscribe((items) => {
      expect(items).toBeTruthy();
      expect(items.length).toEqual(2);

      const germ = items.find((i) => i.id === 9);
      expect(germ).toBeUndefined();
    });

    //check that the correct url was called with the correct method
    const url = `${environment.api}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('GET');

    //flush the mock data
    req.flush(data);
  });

  it('should delete a food item by id', () => {
    const itemToDelete: FoodItem = { id: 2, name: 'Butter Chicken', rating: 5 };
    service.deleteFood(itemToDelete).subscribe((result) => {
      expect(result).toBeTruthy();
    });
    const url = `${environment.api}food/${itemToDelete.id}`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('DELETE');
    req.flush({});
  });

  it('should add a food item', () => {
    const newItem: FoodItem = { id: 10, name: 'Sushi', rating: 4 };
    service.addFood(newItem).subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result.id).toEqual(10);
      expect(result.name).toBe('Sushi');
    });
    const url = `${environment.api}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(newItem);
    req.flush(newItem);
  });

});
