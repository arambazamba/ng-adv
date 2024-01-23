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