import { effect } from '@angular/core';
import { CloudEvent } from '@azure/eventgrid';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { FoodOrder } from './order.model';

export interface OrdersState {
  orders: CloudEvent<FoodOrder>[];
  loading: boolean;
}

const createInitialState = (): OrdersState => ({
  orders: [],
  loading: false,
});

const isBrowser = typeof window !== 'undefined';
const storageKey = 'orders';

export const OrdersStore = signalStore(
  withState(createInitialState()),
  withMethods((store) => ({
    resetOrders: () => {
      patchState(store, createInitialState());
    },
    addOrder: (order: CloudEvent<FoodOrder>) => {
      patchState(store, {
        orders: [...store.orders(), order],
      });
    },
    updateOrder: (order: CloudEvent<FoodOrder>) => {
      const updated = store.orders().map((existing) =>
        existing.id === order.id ? order : existing
      );

      if (order.data?.status === 'ready' || order.data?.status === 'rejected') {
        console.log('New order event', order);
      }

      patchState(store, { orders: updated });
    },
    loadOrdersFromStorage: () => {
      if (!isBrowser) {
        return;
      }

      const serialized = window.localStorage.getItem(storageKey);
      if (!serialized) {
        return;
      }

      try {
        const parsed = JSON.parse(serialized) as CloudEvent<FoodOrder>[];
        patchState(store, { orders: parsed });
      } catch (error) {
        console.error('Failed to parse stored orders', error);
        window.localStorage.removeItem(storageKey);
      }
    },
  })),
  withHooks(({ loadOrdersFromStorage, orders }) => ({
    onInit() {
      loadOrdersFromStorage();

      effect(
        () => {
          if (!isBrowser) {
            return;
          }

          const serialized = JSON.stringify(orders());
          window.localStorage.setItem(storageKey, serialized);
        },
        { allowSignalWrites: true }
      );
    },
  }))
);
