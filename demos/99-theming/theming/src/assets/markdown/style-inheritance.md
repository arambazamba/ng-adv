- Notice `.divclass` in `styles.scss`
- Notice the components in style-inheritance and their nesting. app-first-child again has a nested component

```html
<div class="divclass">
    <app-first-child></app-first-child>
    <app-second-child></app-second-child>
</div>
```
- Use this structure and `ViewEncapsulation.None` to explain style inheritance 

```typescript
@Component({
  selector: 'app-first-child',
  template: `
    ...
  `,
  styles: [...],
  encapsulation: ViewEncapsulation.None
})
```