- Async pipe is a convenient way to handle Observables in Angular templates. 
- It automatically subscribes and unsubscribes to the Observable source, avoiding memory leaks and boilerplate code. 
- Async pipe can be applied to any Observable, including Arrays, Objects and individual properties. 
- For example, you can use async pipe to display the latest value emitted by an Observable in a template, or to iterate over an Observable array and use an alias.


```html
<mat-card-content>
    <div>Person: {{ (person$ | async)?.name }}</div>
</mat-card-content>
```