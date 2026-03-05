- Examine `material.component.spec.ts` to see how Angular Material component harnesses simplify testing Material UI elements.

- Import `HarnessLoader` and the specific harness class (e.g. `MatButtonHarness`, `MatSliderHarness`) from `@angular/material/testing`:

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatSliderHarness } from '@angular/material/slider/testing';
```

- Create a `HarnessLoader` from the fixture and use it to load harnesses instead of querying the DOM directly:

```typescript
beforeEach(() => {
  loader = TestbedHarnessEnvironment.loader(fixture);
});

it('should have two buttons', async () => {
  const buttons = await loader.getAllHarnesses(MatButtonHarness);
  expect(buttons.length).toBe(2);
});
```

- Set slider value via the harness API to avoid brittle DOM manipulation:

```typescript
it('slider value above 10 is valid', async () => {
  const slider = await loader.getHarness(MatSliderHarness);
  const thumb = await slider.getEndThumb();
  await thumb.setValue(50);
  expect(fixture.componentInstance.sliderForm.valid).toBe(true);
});
```

- Harnesses abstract away internal DOM structure — tests remain stable across Material version upgrades.
