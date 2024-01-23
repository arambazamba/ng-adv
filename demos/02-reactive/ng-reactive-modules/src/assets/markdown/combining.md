- The merge operator enforces a source Observable to trigger an emission when either one of the inner Observables emit data

- The zip operator enforces a source Observable to trigger an emission when all the inner Observables emit data

- Concat is slightly different from the merge. Both combine the Observables, but concat waits for one Observable to complete before it starts the next one

- forkJoin is best used when you have a group of observables and only care about the final emitted value of each