import { TestBed } from '@angular/core/testing';
import { LayoutStore } from './layout.store';

describe('LayoutStore', () => {
    let store: InstanceType<typeof LayoutStore>;

    beforeEach(() => {
        localStorage.clear();
        TestBed.configureTestingModule({});
        store = TestBed.inject(LayoutStore);
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('should be created', () => {
        expect(store).toBeTruthy();
    });

    it('should have default state', () => {
        expect(store.markdownPaneVisible()).toBe(true);
        expect(store.markdownMode()).toBe('guide');
        expect(store.sidenavVisible()).toBe(true);
        expect(store.sidenavPosition()).toBe('side');
    });

    describe('showGuide', () => {
        it('should hide pane when guide is already active', () => {
            expect(store.markdownPaneVisible()).toBe(true);
            expect(store.markdownMode()).toBe('guide');
            store.showGuide();
            expect(store.markdownPaneVisible()).toBe(false);
        });

        it('should show pane and switch to guide when pane is hidden', () => {
            store.showGuide();
            expect(store.markdownPaneVisible()).toBe(false);
            store.showGuide();
            expect(store.markdownPaneVisible()).toBe(true);
            expect(store.markdownMode()).toBe('guide');
        });

        it('should switch to guide when editor is active', () => {
            store.showEditor();
            expect(store.markdownMode()).toBe('editor');
            store.showGuide();
            expect(store.markdownPaneVisible()).toBe(true);
            expect(store.markdownMode()).toBe('guide');
        });
    });

    describe('showEditor', () => {
        it('should switch mode to editor', () => {
            store.showEditor();
            expect(store.markdownMode()).toBe('editor');
        });
    });

    describe('computed signals', () => {
        it('should compute isGuideActive', () => {
            expect(store.isGuideActive()).toBe(true);
            store.showGuide();
            expect(store.isGuideActive()).toBe(false);
        });

        it('should compute isEditorActive', () => {
            expect(store.isEditorActive()).toBe(false);
            store.showEditor();
            expect(store.isEditorActive()).toBe(true);
        });
    });

    describe('sidenav', () => {
        it('should toggle sidenav visibility', () => {
            store.toggleSidenavVisible();
            expect(store.sidenavVisible()).toBe(false);
            store.toggleSidenavVisible();
            expect(store.sidenavVisible()).toBe(true);
        });

        it('should set sidenav visible', () => {
            store.setSidenavVisible(false);
            expect(store.sidenavVisible()).toBe(false);
        });

        it('should set sidenav position', () => {
            store.setSidenavPosition('over');
            expect(store.sidenavPosition()).toBe('over');
        });
    });

    describe('localStorage persistence', () => {
        it('should persist state to localStorage', () => {
            store.showGuide();
            TestBed.flushEffects();
            const stored = JSON.parse(localStorage.getItem('layout-state') ?? '{}');
            expect(stored.markdownPaneVisible).toBe(false);
        });

        it('should load state from localStorage on init', () => {
            localStorage.setItem('layout-state', JSON.stringify({
                markdownPaneVisible: false,
                markdownMode: 'editor',
                sidenavVisible: false,
                sidenavPosition: 'over',
            }));
            TestBed.resetTestingModule();
            TestBed.configureTestingModule({});
            const freshStore = TestBed.inject(LayoutStore);
            expect(freshStore.markdownPaneVisible()).toBe(false);
            expect(freshStore.markdownMode()).toBe('editor');
            expect(freshStore.sidenavVisible()).toBe(false);
            expect(freshStore.sidenavPosition()).toBe('over');
        });
    });
});
