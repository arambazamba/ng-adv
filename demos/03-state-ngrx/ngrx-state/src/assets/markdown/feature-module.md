- Examine customers.module.ts. It defines a customers state that is loaded by customers.effects.ts

```typescript
@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    ...
    StoreModule.forFeature(customerState),
    EffectsModule.forFeature([CustomerEffects]),
  ]
})
export class CustomersModule { }
```