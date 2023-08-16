 A `Container-Presenter` pattern using NgRx is implemented in `skills-container.component.ts` and  `skill-row.component.ts`. Point out the benefits of using this pattern.

```html
<div *ngFor="let sk of skills | async" class="item">
    <app-skill-row
        [skill]="sk"
        (itemDeleted)="deleteItem($event)"
        (itemCompleted)="toggleItemComplete($event)">
    </app-skill-row>
</div>
```


```typescript
export class SkillRowComponent {
  @Input() skill: Skill = new Skill();
  @Output() itemDeleted: EventEmitter<Skill> = new EventEmitter<Skill>();
  @Output() itemCompleted: EventEmitter<Skill> = new EventEmitter<Skill>();
```