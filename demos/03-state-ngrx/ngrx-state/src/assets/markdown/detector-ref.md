This sample produces a very common error related to Change Detection and its err handler which can be turned on and off:

```typescript
export class ChangeDetectorRefComponent implements AfterViewInit {
  @ViewChild(DetectorChildComponent) child: DetectorChildComponent | null = null;
  produceErr = true;
  handleErr = true;
```

![checked-err](assets/images/checked-err.png)