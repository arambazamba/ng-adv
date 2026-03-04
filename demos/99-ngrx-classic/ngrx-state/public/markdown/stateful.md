Explain Stateful Service implemented in `stateful-demo.service.ts` that uses BehaviorSubject

```typescript
private demos: BehaviorSubject<DemoItem[]> = new BehaviorSubject<DemoItem[]>([]);
private initData() {
    this.httpClient.get<DemoItem[]>(`${environment.apiUrl}demos`).subscribe((data) => {this.demos.next(data);});
```

Examine the two components in stateful.component.html:

```html
<app-list></app-list>
<app-kpi></app-kpi>
```

Use the `Add Demo` button on the sidebar to add an item. Examine the implementation code and its effect on the two components

![add-demo](assets/images/add-demo.jpg)