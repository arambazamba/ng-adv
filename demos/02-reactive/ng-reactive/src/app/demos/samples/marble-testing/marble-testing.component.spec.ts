import { map } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

describe('Marble Testing', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('test with simple values', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const source$ = cold('a--b-c|', { a: 1, b: 3, c: 5 });
      const expected = 'a--b-c|';

      expectObservable(source$).toBe(expected, { a: 1, b: 3, c: 5 });
    });
  });

  it('test with operator', () => {
    // destructuring cold anad expectObservable from RunHelpers
    testScheduler.run(({ cold, expectObservable }) => {
      const source$ = cold('a--b-c|', { a: 1, b: 3, c: 5 });
      const piperesult$ = source$.pipe(map((v) => v * 10));
      const expected = 'a--b-c|';
      expectObservable(piperesult$).toBe(expected, { a: 10, b: 30, c: 50 });
    });
  });
});
