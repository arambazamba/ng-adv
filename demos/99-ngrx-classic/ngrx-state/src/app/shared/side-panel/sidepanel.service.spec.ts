import { TestBed } from '@angular/core/testing';
import { SidePanelService } from './sidepanel.service';
import { SidebarActions } from './sidebar.actions';

describe('SidePanelService', () => {
    let service: SidePanelService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SidePanelService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should initialize with HIDE_MARKDOWN action', () => {
        const commands = service.getCommands();
        expect(commands()).toBe(SidebarActions.HIDE_MARKDOWN);
    });

    it('should trigger a command', () => {
        service.triggerCmd(SidebarActions.SHOW_MARKDOWN);
        const commands = service.getCommands();
        expect(commands()).toBe(SidebarActions.SHOW_MARKDOWN);
    });
});