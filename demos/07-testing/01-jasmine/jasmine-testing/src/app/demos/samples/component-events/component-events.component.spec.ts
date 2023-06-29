import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { ComponentEventsComponent } from './component-events.component';

describe('Component - Events - EventsComponent', () => {
  let component: ComponentEventsComponent;
  let fixture: ComponentFixture<ComponentEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentEventsComponent],
      imports: [MatCardModule, MatButtonModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ComponentEventsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the count - triggerEventHandler', () => {
    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', {});

    expect(component.count).toBe(1);
    fixture.detectChanges();

    const divResult = fixture.debugElement.query(By.css('#result'));
    expect(divResult.nativeElement.innerText).toContain('1');
  });

  it('should increment the count - Native Api', () => {
    const btn = fixture.debugElement.query(By.css('button'));
    btn.nativeElement.click();
    btn.nativeElement.click();

    expect(component.count).toBe(2);
    fixture.detectChanges();

    const divResult = fixture.debugElement.query(By.css('#result'));
    expect(divResult.nativeElement.innerText).toContain('2');
  });
});
