import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidePanelComponent } from './side-panel.component';
import { SnackbarService } from '../snackbar/snackbar.service';
import { SidePanelService } from './sidepanel.service';
import { RendererStateService } from '../markdown-renderer/renderer-state.service';
import { SideNavService } from '../sidenav/sidenav.service';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('SidePanelComponent', () => {
    let component: SidePanelComponent;
    let fixture: ComponentFixture<SidePanelComponent>;

    let rendererStateService: RendererStateService;
    let sideNavService: SideNavService;
    let snackbarService: SnackbarService;
    let sidePanelService: SidePanelService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatToolbar,
                MatToolbarRow,
                MatMiniFabButton,
                MatIcon,
                MatTooltipModule,
                SidePanelComponent
            ],
            providers: [
                SnackbarService,
                SidePanelService,
                RendererStateService,
                SideNavService
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(SidePanelComponent);
        component = fixture.componentInstance;
        snackbarService = TestBed.inject(SnackbarService);
        sidePanelService = TestBed.inject(SidePanelService);
        rendererStateService = TestBed.inject(RendererStateService);
        sideNavService = TestBed.inject(SideNavService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle editor display and icon', () => {
        component.editorDisplayed = false;
        component.icon = 'create';
        component.toggleEditor();
        expect(component.editorDisplayed).toBeTrue();
        expect(component.icon).toBe('close');
        component.toggleEditor();
        expect(component.editorDisplayed).toBeFalse();
        expect(component.icon).toBe('create');
    });

    it('should call toggleMenuVisibility on SideNavService', () => {
        const toggleMenuVisibilitySpy = spyOn(sideNavService, 'toggleMenuVisibility');
        component.toggleSideNav();
        expect(toggleMenuVisibilitySpy).toHaveBeenCalled();
    });

    it('should call toggleVisibility on RendererStateService', () => {
        const toggleVisibilitySpy = spyOn(rendererStateService, 'toggleVisibility');
        component.toggleInfo();
        expect(toggleVisibilitySpy).toHaveBeenCalled();
    });

    it('should handle keyboard event to toggle info', () => {
        const toggleInfoSpy = spyOn(component, 'toggleInfo');
        const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'i' });
        component.handleKeyboardEvent(event);
        expect(toggleInfoSpy).toHaveBeenCalled();
    });
});