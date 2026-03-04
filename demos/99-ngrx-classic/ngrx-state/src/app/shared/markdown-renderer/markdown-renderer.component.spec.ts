import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownComponent, MarkdownModule } from 'ngx-markdown';
import { environment } from '../../../environments/environment';
import { MarkdownRendererComponent } from './markdown-renderer.component';
import { RendererStateService } from './renderer-state.service';

describe('MarkdownRendererComponent', () => {
    let component: MarkdownRendererComponent;
    let fixture: ComponentFixture<MarkdownRendererComponent>;
    let rendererStateService: RendererStateService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MarkdownModule.forRoot(),
                BrowserAnimationsModule,
                MatExpansionPanel,
                MatExpansionPanelHeader,
                MatExpansionPanelTitle,
                MarkdownComponent,
                MarkdownRendererComponent
            ],
            providers: [
                RendererStateService,
                provideHttpClient()
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(MarkdownRendererComponent);
        component = fixture.componentInstance;
        rendererStateService = TestBed.inject(RendererStateService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set md input correctly', () => {
        fixture.componentRef.setInput('md', 'test-markdown');
        fixture.detectChanges();
        expect(component.md()).toBe('test-markdown');
    });

    it('should return correct markdown path', () => {
        fixture.componentRef.setInput('md', 'test-markdown');
        fixture.detectChanges();
        const expectedPath = `${environment.markdownPath}test-markdown.md`;
        expect(component.getMarkdown()).toBe(expectedPath);
    });

    it('should toggle panel visibility', () => {
        spyOn(rendererStateService, 'toggleVisibility');
        component.togglePanel();
        expect(rendererStateService.toggleVisibility).toHaveBeenCalled();
    });

    it('should get initial content visibility state', () => {
        const initialVisibility = rendererStateService.getVisible();
        expect(component.contentVisible()).toBe(initialVisibility());
    });
});