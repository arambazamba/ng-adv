import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the initial loading state as false', () => {
    service.getLoading().subscribe((loading) => {
      expect(loading).toBe(false);
    });
  });

  it('should set loading state to true', () => {
    service.setLoading(true);
    service.getLoading().subscribe((loading) => {
      expect(loading).toBe(true);
    });
  });

  it('should set loading state to false', () => {
    service.setLoading(true); // First set it to true
    service.setLoading(false); // Then set it to false
    service.getLoading().subscribe((loading) => {
      expect(loading).toBe(false);
    });
  });
});

