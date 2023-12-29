- Examine `sidepanel.service.ts` and `side-panel.component.ts` to see an example on how to replace BehaviourSubjects with Signals to implement a stateful service:

  ```typescript
  @Injectable({ providedIn: 'root' })
  export class SidePanelService {
    private commands = signal<SidebarActions>(SidebarActions.HIDE_MARKDOWN);

    getCommands() {
      return computed(() => this.commands());
    }

    triggerCmd(action: SidebarActions) {
      this.commands.set(action);
    }
  }
  ```

- Examine its use in demo-container.component.html and the fact that using Signals in the template spares your from using the async pipe

  ```html
  <div class="gdEditor" *ngIf="showMdEditor">
    <app-markdown-editor></app-markdown-editor>
  </div>
  ```
