- Navigate to folder `simple-service` which implements a simple service with no injection.

- Examine `simple.service.ts` and `simple.service.spec.ts`

```typescript
export class SimpleMessageService {
  constructor() {}
  messages: string[] = [];
  add(message: string) {
    this.messages.push(message);
  }
  delete(msg: string) {
    this.messages = this.messages.filter((item) => item != msg);
  }
  clear() {
    this.messages = [];
  }
}
```