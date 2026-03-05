# Comp Interaction — CustomersComponent

Test interactions by emitting events from the child presenter and asserting store method calls.

## Spec file

## Key Concepts
- By.directive(ChildComponent) locates child components in the tree
- Emit outputs directly on componentInstance.output.emit(value)
- Update writable signals to simulate async state changes
- Combine spy assertions with DOM queries for full coverage
