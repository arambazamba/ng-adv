- Examine the use of `inject` in `di-inject.component.ts`. It replaces the use of the constructor for dependency injection.

  ```typescript
  @Component({
    selector: 'app-di-inject',
    templateUrl: './di-inject.component.html',
    styleUrls: ['./di-inject.component.scss']
  })
  export class DiInjectComponent {
    service = inject(DemoService);
    demos = this.service.getItems();
  }
  ```
