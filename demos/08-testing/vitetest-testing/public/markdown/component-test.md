# Comp CRUD — SimpleCustomersComponent

Test a component using Angular resource() for data loading with a service spy.

## Spec file

## Key Concepts
- vi.fn().mockReturnValue(of(data)) returns a synchronous observable
- resource() is async so use await fixture.whenStable() before asserting
- resource.reload() triggers another GET call after deletion
