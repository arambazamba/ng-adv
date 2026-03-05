import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { customersStore } from './customers.store';
import { CustomersService } from './customers.service';
import { Customer } from './customer.model';
import { of, throwError } from 'rxjs';
import { patchState, signalStore, withState, withMethods } from '@ngrx/signals';

describe('CustomersStore', () => {
    let store: InstanceType<typeof customersStore>;
    let customersService: { getCustomers: ReturnType<typeof vi.fn>; updateCustomer: ReturnType<typeof vi.fn> };
    let mockCustomers: Customer[];

    beforeEach(() => {
        mockCustomers = [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' },
        ];

        const spy = { getCustomers: vi.fn().mockReturnValue(of([])), updateCustomer: vi.fn() };

        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            providers: [
                { provide: CustomersService, useValue: spy },
                customersStore
            ]
        });

        customersService = TestBed.inject(CustomersService) as any;
        store = TestBed.inject(customersStore);
    });

    it('should get customer by id', () => {
        const customStore = signalStore(
            { providedIn: undefined, protectedState: false },
            withState({ customers: mockCustomers, loading: false, filter: '' }),
            withMethods(() => ({
                getById: (id: number) => mockCustomers.find(c => c.id === id)
            }))
        );
        const instance = new customStore();
        const customer = instance.getById(1);
        expect(customer).toEqual(mockCustomers[0]);
    });

    it('should return undefined for non-existent customer id', () => {
        const customStore = signalStore(
            { providedIn: undefined, protectedState: false },
            withState({ customers: mockCustomers, loading: false, filter: '' }),
            withMethods(() => ({
                getById: (id: number) => mockCustomers.find(c => c.id === id)
            }))
        );
        const instance = new customStore();
        const customer = instance.getById(999);
        expect(customer).toBeUndefined();
    });

    it('should update customer successfully', () => {
        const updatedCustomer = { id: 1, name: 'John Updated' };
        customersService.updateCustomer.mockReturnValue(of(updatedCustomer));

        patchState(store, { customers: mockCustomers });

        store.updateCustomer(updatedCustomer);

        const customers = store.customers();
        expect(customers[0]).toEqual(updatedCustomer);
        expect(store.loading()).toBe(false);
    });

    it('should handle update customer error', () => {
        const error = new Error('Update failed');
        const customerToUpdate = mockCustomers[0];
        customersService.updateCustomer.mockReturnValue(throwError(() => error));
        vi.spyOn(console, 'error').mockImplementation(() => { });

        patchState(store, { customers: mockCustomers });

        store.updateCustomer(customerToUpdate);

        expect(store.loading()).toBe(false);
        expect(console.error).toHaveBeenCalledWith('error: ', error);
    });

    it('should compute next id correctly', () => {
        patchState(store, { customers: mockCustomers });
        expect(store.nextId()).toBe(3);
    });

    it('should compute next id as 1 when no customers', () => {
        expect(store.nextId()).toBe(1);
    });

});