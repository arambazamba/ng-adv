- Examine `skill-row.component.ts` and its use of Signal Inputs that replaces classic `@input()` decorator.

```typescript
export class SkillRowComponent {
  skill = input.required<Skill>();
```