Async pipe unsubscribes automatically and is used to bind Observables. It can be used for Arrays, Objects and also specific properties:

```html
<mat-card-content>
    <div>Person: {{ (person$ | async)?.name }}</div>
</mat-card-content>
```