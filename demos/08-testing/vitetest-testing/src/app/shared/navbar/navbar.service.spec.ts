import { AsyncPipe } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideNavService } from '../sidenav/sidenav.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { NavbarComponent } from './navbar.component';
import { NavbarService } from './navbar.service';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: any;
    let sideNavService: SideNavService;
    let snackbarService: SnackbarService;
    let navbarService: NavbarService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatToolbar,
                MatToolbarRow,
                MatIcon,
                RouterLinkActive,
                RouterLink,
                AsyncPipe,
                NavbarComponent
            ],
            providers: [
                SideNavService,
                SnackbarService,
                NavbarService,
                provideHttpClient()
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        sideNavService = TestBed.inject(SideNavService);
        snackbarService = TestBed.inject(SnackbarService);
        navbarService = TestBed.inject(NavbarService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle menu visibility', () => {
        vi.spyOn(sideNavService, 'toggleMenuVisibility');
        component.toggleMenu();
        expect(sideNavService.toggleMenuVisibility).toHaveBeenCalled();
    });

    it('should display alert when toggling apps', () => {
        vi.spyOn(snackbarService, 'displayAlert');
        component.toggleApps();
        expect(snackbarService.displayAlert).toHaveBeenCalledWith('Apps', 'Not implemented - just a mock');
    });

});