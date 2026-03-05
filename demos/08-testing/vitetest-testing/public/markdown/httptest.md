# Service HTTP Test — CustomersService

Test Angular services that use HttpClient with HttpTestingController.

## Spec file

## Key Concepts
-  replaces the real HTTP backend
-  asserts exactly one request was made
-  delivers the mock response to the observable
-  in afterEach ensures no unexpected requests remain
- Test all HTTP verbs: GET, POST, PUT, DELETE
