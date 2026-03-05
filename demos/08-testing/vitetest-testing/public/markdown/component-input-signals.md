# Input Signals and Outputs — CustomerEditComponent

Test CustomerEditComponent which has a required customer signal input and save/cancel outputs.

## Spec file

## Key Concepts
- fixture.componentRef.setInput() works for required input() signals
- Changing the input resets linkedSignal — verify via DOM values
- Subscribe to output() signals with a spy before triggering events
- Test disabled state via button.disabled attribute
