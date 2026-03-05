import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment';
import { FoodServiceBS } from './food.service-bs';
import { FoodItem } from './food.model';

describe('Service - Signal-based HTTP', () => {
  let service: FoodServiceBS;
  let controller: HttpTestingController;
  let mockData: FoodItem[] = [];

  beforeEach(() => {
    mockData = [
      { id: 1, name: 'Pad Thai', rating: 5 },
      { id: 2, name: 'Butter Chicken', rating: 5 },
    ];

    TestBed.configureTestingModule({
      providers: [
        FoodServiceBS,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(FoodServiceBS);
    controller = TestBed.inject(HttpTestingController);

    // Fulfill the HTTP request made in the service constructor
    const url = `${environment.api}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should initialize with data from HTTP call', () => {
    expect(service).toBeTruthy();
    expect(service.getFood()()).toEqual(mockData);
  });

  it('should add food item to signal state', () => {
    const newItem: FoodItem = { id: 3, name: 'Cannelloni', rating: 4 };
    service.addFood(newItem);

    const items = service.getFood()();
    expect(items.length).toBe(3);
    expect(items[2]).toEqual(newItem);
  });

  it('should maintain correct count after multiple additions', () => {
    service.addFood({ id: 3, name: 'Cannelloni', rating: 4 });
    service.addFood({ id: 4, name: 'Pad See Ew', rating: 5 });

    const items = service.getFood()();
    expect(items.length).toBe(4);
    expect(items[2].name).toBe('Cannelloni');
    expect(items[3].name).toBe('Pad See Ew');
  });

  it('should delete food item from signal state', () => {
    const itemToDelete = mockData[0];
    service.deleteFood(itemToDelete);

    const items = service.getFood()();
    expect(items.length).toBe(1);
    expect(items[0]).toEqual(mockData[1]);
    expect(items).not.toContain(itemToDelete);
  });
});
