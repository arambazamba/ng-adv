# Topics

## Theming Angular Apps

- Style inheritance and View Encapsulation
- Comparing Angular Material & Bootstrap
- Material Theming  Overview
- Using Material Colours to define Primary, Accent and Warning Colours
- Building a Reusable Material Theme
- Define Alternative Themes
- Theming Custom Components and override Material Components
- Material Design Migration to MDC
- Using Bootstrap with Angular

## Components & Forms Deep Dive

- Standalone Components vs Modules
- Standalone Components: Creation, Lazy Loading, Bootstrapping
- Standalone Directives & Directives Composition Api
- Components and Required Inputs
- Content Projection 
- Templates TemplateRef, *ngTemplateOutlet
- Comparison: ng-template vs ng-content - pro / cons
- ViewChild, -Children, ContentChild, -Children
- HostBinding & HostListener
- Recap Reactive Forms Revisited (FormGroup, Form Builder, FormControl, FormArray)
- Dynamic Component Loading & Databinding
- Untyped Forms vs Typed Forms 
- Typed Forms Nullability, NonNullableFormBuilder, GetRawValue
- Partial Values, Optional Controls, Dynamic Groups and FormRecord
- Cascading Form Controls
- Implementing Custom Controls using ControlValueAccessor
- Typed Forms Validation & Custom Validators
- Handling FormErrors & ErrorStateMatcher

## Mastering Reactive Programming using Signals & RxJS

- Imperative vs Functional Programming
- Immutability & Pure Functions
- Introduction to RxJS
- Observables, Observers & Use Cases
- Data- vs Action-Streams
- Mouse & DOM Events as Observables
- Implementing Side Effects using tap
- Base Operators: Mapping, Filtering, Merging, Scanning, ...
- Unsubscribing (takeUntil, DestroyRef, takeUntilDestroyed)
- Introduction to Signals
- Imperative vs Declarative Reactive Programming
- Signals vs Observables: Synchronous  & Asynchronous Reactive Programming
- Understanding Marble Diagrams & Debugging Observables
- Marble-testing RxJS
- Combination & Transformation Operators
- Retry & Error Handling Strategies
- Implementing & Testing Custom Observable Operators
- Communication between using Event Bus Pattern
- Statefull Services using Behaviour Subjects and Signals

## Advanced State Management using NgRx

- Overview State Management Patterns
- Introduction to the Redux Pattern & NgRx
- Feature State and ActionReducerMap
- Using Store, Reducers, Selectors, Actions & createActionGroup
- Debugging NgRx using Redux Dev Tools
- Effects, Facades, @ngrx/enitity adapters
- Simplifying Data Access with @ngrx/data
- NgRx Container Presenter Best Practices
- NgRx and Signals Interoperability
- @ngrx/component-store vs classic NgRx Store
- Using @ngrx/component-store

## Advanced Routing and App Initialization

- Dependency Injection in Depth: Resolution modifiers and Dependency providers
- Using Constructor vs inject for DI
- APP_INITIALIZER, Injection & forwardRef
- Implementing Global Error Handling and Retry-Patterns
- Modules & Code Splitting
- Introduction to @ngrx/router-store
- Routing using NgRx Actions
- Binding Router-Params to Component Inputs
- Integrating Route Guards & Interceptors with NgRx
- Functional Route Guards & Interceptors
- Chaining Route Guards & Interceptors
- Auxiliary Routes: Common use cases
- Preloading Component Data from NgRx using Functional Resolvers
- Router Animations & Anchor Scrolling
- Introduction to Visual Feedback (Loading-, Saving-, ...-Indicator)

## Securing Angular using Cloud Identities

- Recap Jwt, OAuth 2.0 & OpenID Connect
- Token based Authentication in Angular with NgRx
- Impelmenting an AuthModule using a Facade Service, Components, Guards & Interceptors
- Optimizing Application Flow for Authetication
- Authentication using Microsoft Identity, Azure AD and @azure/msal-angular

## Advanced Testing with Jasmine, Jest, Cypress and NgRx

- Introdcution Angular Testing Tools (Jasmine, Karma, Jest & Cypress)
- Testing Classes, Pipes, Directives
- Testing Services using HttpClientTestingModule & HttpTestingController
- Mocking vs Spies
- Testing Component Interaction (Read, Write, Emit, Inputs)
- Complex Forms Testing
- Testing Observables & BehaviourSubjects
- Material Testing using Component Harnesses
- Async Component Testing (done, fakeAsync, waitForAsync)
- Components Marble Testing
- Testing NgRx: Mock Store, Mock Selectors, Reducers, Effects, Facades
- Using Jest for Unit Testing (Setup, Changes in spec, Snapshot Tests)
- Introduction to End-2-End Testing using Cypress
- Cypress Component Tests

## Reusability with Libraries, Schematics, Nx & Angular Elements

- Angular Building Blocks: Workspace, Apps, Libraries
- Reusable Artifacts using Angular Libraries
- Implementing, Publishing and Consuming Libraries to / from GitHub Packages
- Understanding Monorepos: Pro / Cons
- Introduction to Nx Workspaces
- Understanding and Implementing Schematics
- Implementing Web Components using Angular Elements

## Implementing Real Time connected Microfrontends

- Introduction to Microfrontends and Event Driven Architecture (EDA)
- Implementing a Real Time connected Microfrontend listening to Cloud Events
- Using `@ngrx/component-store`
- Introduction to Progressive Web Apps
- Understanding and Configuring Service Workers & Manifests
- Installing & Updating Progressive Web Apps
- Introduction to Module Federation

## Optimizing Applications

- Using Chrome Dev Tools & Lighthouse for Performance Optimization
- Analysing and Optimizing Bundles & Modules
- Understanding & Using Page Traces
- Optimizing Images using NgOptimizedImage 
- Logging NgRx to custom destinations using Meta-Reducers 
- Virtual- & Infinite Scrolling
- Understanding, Profiling & Optimizing Angular Change Detection
- Optimize Change Detection using ngrxPush, ChangeDetectioRef
- Change Detection and Signals
- Using Linting and Autoformat with Prettier
- Accessibility A11y: Best Practices & Linting
- Introduction to Server Side Rendering (SSR) using Angular 16+
- Why Server Side Rendering
- Non-destructive hydration
- Configure Server Side Rendering & prerender static pages

## Publishing Angular App using Containers and Config Injection

- Deployment Overview & Cloud Hosting Options
  -  Using ng deploy to publish to Firebasee
  -  Deploy to Azure Static Webapp 
- Configuration Management and Config Injection Options
  - Using a config service
  - Creating an Angular Multi-Stage Docker Image
  - Overriding config in containers using environment variables
- Deploy to a Cloud Container Host (Azure Container Apps)
  - Azure Container Apps Overview
  - Publish & Configure Api & Angular UI Containers