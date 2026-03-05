import { signal, effect, Injector, inject, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

/**
 * Advanced Async Test Patterns with Angular Signals and Vitest
 * 
 * Demonstrates modern approaches to testing async operations with signals,
 * avoiding BehaviorSubjects and Observables, using pure signal-based patterns.
 */

describe('Advanced Async Testing Patterns', () => {

    describe('Signal-based async operations with effect()', () => {
        let injector: Injector;

        beforeEach(() => {
            TestBed.configureTestingModule({});
            injector = TestBed.inject(Injector);
        });

        it('executes side effects when signal changes', async () => {
            let stopEffect: ReturnType<typeof effect> | undefined;
            const result = signal<string>('initial');
            const sideEffectLog: string[] = [];

            runInInjectionContext(injector, () => {
                stopEffect = effect(() => {
                    sideEffectLog.push(result());
                });
            });

            TestBed.flushEffects();
            expect(sideEffectLog).toContain('initial');

            result.set('updated');
            TestBed.flushEffects();

            expect(sideEffectLog).toContain('updated');
            stopEffect?.destroy();
        });

        it('handles multiple rapid signal changes correctly', async () => {
            const counter = signal(0);
            const changes: number[] = [];
            let stopEffect: ReturnType<typeof effect> | undefined;

            runInInjectionContext(injector, () => {
                stopEffect = effect(() => {
                    changes.push(counter());
                });
            });

            TestBed.flushEffects();

            counter.set(1);
            counter.set(2);
            counter.set(3);

            TestBed.flushEffects();

            expect(counter()).toBe(3);
            expect(changes).toContain(0); // initial
            stopEffect?.destroy();
        });
    });

    describe('Async data loading with signals and mocking', () => {
        it('loads data asynchronously and updates signal', async () => {
            const data = signal<{ name: string; age: number } | null>(null);
            const loading = signal(false);
            const error = signal<string | null>(null);

            // Simulate async data fetch
            const mockAsyncFetch = async () => {
                loading.set(true);
                error.set(null);
                try {
                    // Simulate network delay with fake timers OR Promise chain
                    await Promise.resolve(); // microtask
                    await new Promise(resolve => setTimeout(resolve, 0)); // next tick

                    data.set({ name: 'Alice', age: 30 });
                } catch (err) {
                    error.set('Failed to load');
                } finally {
                    loading.set(false);
                }
            };

            expect(loading()).toBe(false);
            expect(data()).toBeNull();

            const fetchPromise = mockAsyncFetch();

            // Loading should start immediately
            expect(loading()).toBe(true);

            // Wait for completion
            await fetchPromise;

            expect(loading()).toBe(false);
            expect(data()?.name).toBe('Alice');
            expect(error()).toBeNull();
        });

        it('handles async operation errors correctly', async () => {
            const result = signal<string | null>(null);
            const error = signal<string | null>(null);

            const failingFetch = async () => {
                try {
                    await Promise.reject(new Error('Network failed'));
                } catch (err) {
                    error.set((err as Error).message);
                }
            };

            await failingFetch();

            expect(error()).toBe('Network failed');
            expect(result()).toBeNull();
        });
    });

    describe('Polling with signals', () => {
        it('implements polling with signal-based intervals', async () => {
            const localTime = signal(new Date('2025-01-01T00:00:00Z'));
            const pollCount = signal(0);

            // Simulate polling by manually incrementing
            const poll = () => {
                pollCount.update(c => c + 1);
                localTime.update(time => new Date(time.getTime() + 1000)); // +1s
            };

            poll();
            poll();
            poll();

            expect(pollCount()).toBe(3);
            expect(localTime().getTime()).toBe(new Date('2025-01-01T00:00:03Z').getTime());
        });
    });

    describe('Chained async operations with signals', () => {
        it('executes a chain of async operations', async () => {
            const step1 = signal(false);
            const step2 = signal(false);
            const step3 = signal(false);

            const executeChain = async () => {
                // Step 1: Start
                step1.set(true);
                await Promise.resolve();

                // Step 2: Continue
                expect(step1()).toBe(true);
                step2.set(true);
                await Promise.resolve();

                // Step 3: Complete
                expect(step2()).toBe(true);
                step3.set(true);
                await Promise.resolve();
            };

            await executeChain();

            expect(step1()).toBe(true);
            expect(step2()).toBe(true);
            expect(step3()).toBe(true);
        });
    });

    describe('Async with vitest fake timers', () => {
        beforeEach(() => {
            vi.useFakeTimers();
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it('tests timeout-based async operations with fake timers', async () => {
            const delayed = signal<string>('initial');

            const delayedUpdate = () => {
                setTimeout(() => {
                    delayed.set('updated');
                }, 1000);
            };

            delayedUpdate();

            // Before time advance
            expect(delayed()).toBe('initial');

            // Advance timers
            vi.advanceTimersByTime(1000);

            // After microtask queue processes
            await Promise.resolve();

            expect(delayed()).toBe('updated');
        });

        it('tests interval-based polling with fake timers', (() => {
            const pollResults = signal<number[]>([]);
            let counter = 0;

            const startPolling = () => {
                const intervalId = setInterval(() => {
                    counter++;
                    pollResults.update(arr => [...arr, counter]);
                }, 500);

                return () => clearInterval(intervalId);
            };

            const stop = startPolling();

            // Advance by 1.5 seconds = 3 polls
            vi.advanceTimersByTime(1500);

            expect(pollResults().length).toBe(3);
            expect(pollResults()).toEqual([1, 2, 3]);

            stop();
        }));
    });

    describe('Concurrent async operations with signals', () => {
        it('waits for multiple concurrent operations', async () => {
            const result1 = signal<string | null>(null);
            const result2 = signal<string | null>(null);
            const result3 = signal<string | null>(null);

            const asyncOp = (name: string, delay: number): Promise<string> => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(`Result: ${name}`), delay);
                });
            };

            // Start all operations concurrently
            const promise1 = asyncOp('A', 10).then(v => result1.set(v));
            const promise2 = asyncOp('B', 20).then(v => result2.set(v));
            const promise3 = asyncOp('C', 5).then(v => result3.set(v));

            // Wait for all to complete
            await Promise.all([promise1, promise2, promise3]);

            expect(result1()).toBe('Result: A');
            expect(result2()).toBe('Result: B');
            expect(result3()).toBe('Result: C');
        });
    });

    describe('Aborting async operations with signals', () => {
        it('cancels an async operation properly', async () => {
            const result = signal<string | null>(null);
            const cancelled = signal(false);

            const abortableAsyncOp = async (abortSignal: AbortSignal) => {
                try {
                    const timeout = new Promise((_, reject) => {
                        const timeoutId = setTimeout(() => {
                            reject(new Error('Timeout'));
                        }, 1000);

                        abortSignal.addEventListener('abort', () => {
                            clearTimeout(timeoutId);
                            reject(new Error('Aborted'));
                        });
                    });

                    await timeout;
                } catch (err) {
                    if ((err as Error).message === 'Aborted') {
                        cancelled.set(true);
                    }
                }
            };

            const abortController = new AbortController();
            const operationPromise = abortableAsyncOp(abortController.signal);

            // Cancel the operation
            abortController.abort();

            await Promise.resolve();
            await operationPromise.catch(() => { });

            expect(cancelled()).toBe(true);
        });
    });
});
