# httpResource Test — SkillsResourceComponent

Test a component that uses Angular httpResource() with HttpTestingController.

## Spec file

## Key Concepts
- httpResource() uses HttpClient internally so HttpTestingController works the same way
- Call fixture.detectChanges() first to trigger the resource request
- Flush the request then call detectChanges() again to render the response
- Test loading state before flush and data state after flush
