- Compare the different outputs in the console of the following code block when using the different Subject types:

    ```javascript
    this.sub$.next(0);
    this.sub$.next(5);
    this.sub$.subscribe((val) => console.log('Subscriber A: ', val));
    this.sub$.subscribe((val) => console.log('Subscriber B: ', val));
    this.sub$.next(10);
    ```

- Add late subscriber and emit new value:

    ```javascript
    this.sub$.subscribe((val) => console.log('Subsciber Late', val));
    this.sub$.next(20);
    ```

- Explain the use of the `BehaviorSubject` in `menu.service.ts`.
