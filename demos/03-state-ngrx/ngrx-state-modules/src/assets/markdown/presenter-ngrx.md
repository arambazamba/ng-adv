 A `Container-Presenter` pattern is used to implement the `skills-container` and `skill-row` components. The `skills-container` component is the container and the `skill-row` component is the presenter. The `skills-container` component is responsible for the data and the `skill-row` component is responsible for the presentation.

`skills-container.component.ts:`

```html
<div *ngFor="let sk of skills | async" class="item">
    <app-skill-row
        [skill]="sk"
        (itemDeleted)="deleteItem($event)"
        (itemCompleted)="toggleItemComplete($event)">
    </app-skill-row>
</div>
```

`skill-row.component.ts:`

```typescript
export class SkillRowComponent {
  @Input() skill: Skill = new Skill();
  @Output() itemDeleted: EventEmitter<Skill> = new EventEmitter<Skill>();
  @Output() itemCompleted: EventEmitter<Skill> = new EventEmitter<Skill>();
```