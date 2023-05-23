import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material.component';
import { MatInputModule } from '@angular/material/input';
// Notice manual import of ...Harness
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatSliderHarness } from '@angular/material/slider/testing';
import { MatInputHarness } from '@angular/material/input/testing';

describe('MaterialComponent', () => {
  let component: MaterialComponent;
  let fixture: ComponentFixture<MaterialComponent>;
  let loader: HarnessLoader;
  let sliderHarness: MatSliderHarness;
  let btnResetHarness: MatButtonHarness;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialComponent],
      imports: [MatCardModule, ReactiveFormsModule, MatInputModule, MatSliderModule, MatButtonModule, BrowserAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(MaterialComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should btnReset the slider when btnReset is clicked', async () => {
    btnResetHarness = await loader.getHarness(
      MatButtonHarness.with({ text: 'Reset' })
    );
    sliderHarness = await loader.getHarness(MatSliderHarness);

    await btnResetHarness.click();
    const thumb = await sliderHarness.getEndThumb();
    expect(await thumb.getValue()).toBe(1);
  });

  it('should have the correct value in the input', async () => {
    const input = await loader.getHarness(MatInputHarness);
    expect(await input.getValue()).toBe('Sushi');

    await input.setValue('Pizza');
    expect(await input.getValue()).toBe('Pizza');
  });
});
