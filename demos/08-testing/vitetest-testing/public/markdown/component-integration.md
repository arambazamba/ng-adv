# Container / Presenter — Customers

Integration-test CustomersComponent with real child presenters.

## Spec file

## Key Concepts
- No NO_ERRORS_SCHEMA — real child components are rendered
- By.directive(ChildComp) finds child components in the tree
- Verify that signal inputs flow from container to presenter
- Verify that output events from a presenter reach the container
