Explaing subsink.component.ts. Notice the use of SubSink and discuss it's use case

```typescript
subscribeSearchBox() {
    this.sub.sink = fromEvent(this.searchBox.nativeElement, 'keyup').subscribe(
      (ke: KeyboardEvent) => {
        console.log('Event received from Keyboard:', ke);
      }
    );
  }
```

Discuss on how to improve the the code to get the searchText.