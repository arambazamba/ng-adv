Change Detection Loggin is implemented in skill-row.component.ts and skills-container.component.ts. `environment.ts` contains settings to log change detection cycles. This is useful to see how often change detection is triggered. The following settings are available:

```typescript
export const environment = {
  ...
  logChangeDetection: true,
  logChanges: true,
```
Open Dev Tools, navigate to `Skills` and watch the output

Optimize Change Detection using `OnPush` `in skill-row.component.ts` and skills-container.component.ts:

```typescript
@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
```

Credits to: [The Last Guide For Angular Change Detection You'll Ever Need
](https://mokkapps.de/blog/the-last-guide-for-angular-change-detection-you-will-ever-need/)