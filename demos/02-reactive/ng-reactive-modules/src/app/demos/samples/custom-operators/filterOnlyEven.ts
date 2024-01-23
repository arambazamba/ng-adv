import { Observable } from 'rxjs';

export function filterOnlyEven(source: Observable<number>): Observable<number> {
  return new Observable((observer) => {
    source.subscribe(
      (val: number) => {
        if (val % 2 === 0) {
          observer.next(val);
        }
      },
      (err) => observer.error(err),
      () => observer.complete()
    );
  });
}
