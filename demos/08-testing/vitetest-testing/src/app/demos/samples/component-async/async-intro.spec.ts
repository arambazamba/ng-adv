import { describe, it, expect, vi } from 'vitest';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('Async Testing Examples', () => {
  it('Asynchronous test example with done()', () => {
    return new Promise<void>((resolve) => {
      let test = false;
      setTimeout(() => {
        console.log('running assertions');
        test = true;
        expect(test).toBeTruthy();
        resolve();
      }, 1000);
    });
  });

  it('Vitest fake timers - Macrotask', () => {
    vi.useFakeTimers();
    let test = false;
    setTimeout(() => {
    });
    setTimeout(() => {
      console.log('running assertions setTimeout()');
      test = true;
    }, 1000);
    vi.runAllTimers();
    expect(test).toBeTruthy();
    vi.useRealTimers();
  });

  it('Microtask - Promise', async () => {
    let test = false;
    await Promise.resolve().then(() => {
      console.log('Promise then() evaluated successfully');
      return Promise.resolve();
    })
      .then(() => {
        console.log('Nested Promise then() evaluated successfully');
        test = true;
      });
    console.log('Running test assertions');
    expect(test).toBeTruthy();
  });

  it('Promises & Macrotasks', async () => {
    vi.useFakeTimers();
    let counter = 0;
    await Promise.resolve()
      .then(() => {
        counter += 10;
        setTimeout(() => {
          counter += 1;
        }, 1000);
      });

    expect(counter).toBe(10);
    vi.advanceTimersByTime(1000);
    expect(counter).toBe(11);
    vi.useRealTimers();
  });

  it('Vitest fake timers - Observables', () => {
    vi.useFakeTimers();
    let test = false;
    const test$ = of(test).pipe(delay(1000));
    test$.subscribe(() => {
      test = true;
    });

    vi.advanceTimersByTime(1000);
    console.log('Running test assertions');
    expect(test).toBe(true);
    vi.useRealTimers();
  });
});