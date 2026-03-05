import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { customersStore } from '../customers.store';
import { provideHttpClient } from '@angular/common/http';
import { CustomersComponent } from './customers.component';
import { CustomersService } from '../customers.service';
import { of } from 'rxjs';
import { Customer } from '../customer.model';

describe('customersStore', () => {
    let comp: CustomersComponent;

    const mockCustomers: Customer[] = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                customersStore,
                {
                    provide: CustomersService,
                    useValue: {
                        getCustomers: () => of(mockCustomers),
                        updateCustomer: () => of(mockCustomers[0])
                    }
                }
            ]
        });
    });

    it('should verify that three customers are available', () => {
        const store = TestBed.inject(customersStore);
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                expect(store.customers()).toHaveLength(3);
                resolve();
            }, 0);
        });
    });


});