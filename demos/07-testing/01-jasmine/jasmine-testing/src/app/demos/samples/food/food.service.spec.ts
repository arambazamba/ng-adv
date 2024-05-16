import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FoodService } from './food.service';
import { FoodItem } from './food.model';
import { environment } from '../../../../environments/environment.prod';

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
      imports: [HttpClientTestingModule],
      providers: [FoodService],
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
    const url = `${environment.apiUrl}food`;
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
    const url = `${environment.apiUrl}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('GET');

    //flush the mock data
    req.flush(data);
  });

});
