# Comp Spy — CustomersComponent

Test CustomersComponent by replacing the customersStore with a spy object.

## Spec file

## Pattern
Provide a fake store with signal() properties and vi.fn() methods.
Use  to inject the fake.

## Key Concepts
- Use signal() for state properties and vi.fn() for methods
- Assert spy calls with toHaveBeenCalledWith()
- No HTTP requests, no real store effects
