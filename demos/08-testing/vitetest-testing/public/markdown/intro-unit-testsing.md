Navigate to folder `\intro-unit-testing`

Investigate `simple-class.ts` and `simple-class.spec.ts`

Notice the First Test:

```typescript
it('contains 12 characters', function () {
  expect(SimpleClass.sayHelloWorld().length).toEqual(12);
});
```

Run tests using Vitest via Angular CLI:

```bash
ng test
ng test --watch false
```

Additional intro samples: `voucher-validator.ts` and `voucher-validator.spec.ts`
