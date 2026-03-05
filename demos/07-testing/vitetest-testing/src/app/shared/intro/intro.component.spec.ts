import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { IntroComponent } from './intro.component';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { provideRouter } from '@angular/router';

describe('IntroComponent', () => {
    let component: IntroComponent;
    let fixture: ComponentFixture<IntroComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatCardModule,
                MatButtonModule,
                IntroComponent
            ],
            providers: [provideRouter([])]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IntroComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the title', () => {
        fixture.componentRef.setInput('title', 'Test Title');
        fixture.componentRef.setInput('img', 'test-image.jpg');
        fixture.detectChanges();
        const titleElement = fixture.debugElement.query(By.css('mat-card-title')).nativeElement;
        expect(titleElement.textContent).toContain('Test Title');
        const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
        expect(imgElement.src).toContain('test-image.jpg');
    });

    it('should display the subtitle', () => {
        fixture.componentRef.setInput('title', 'Test Title');
        fixture.componentRef.setInput('img', 'test-image.jpg');
        fixture.componentRef.setInput('subtitle', 'Test Subtitle');
        fixture.detectChanges();
        const subtitleElement = fixture.debugElement.query(By.css('mat-card-subtitle')).nativeElement;
        expect(subtitleElement.textContent).toContain('Test Subtitle');
    });

});