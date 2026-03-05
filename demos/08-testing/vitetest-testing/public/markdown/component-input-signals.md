- Examine `intro.component.ts`. It contains `inputs` and `input.required`:

```typescript
export class IntroComponent {
  title = input.required<string>();
  img = input.required<string>();
  subtitle = input<string>('');
}
```

Use `fixture.componentRef.setInput()` to set the values of the `inputs`:

```typescript
fixture.componentRef.setInput('title', 'Test Title');
fixture.componentRef.setInput('img', 'test-image.jpg');
fixture.componentRef.setInput('subtitle', 'Test Subtitle');
```