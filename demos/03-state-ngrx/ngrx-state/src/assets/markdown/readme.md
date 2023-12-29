# Advanced State Management using NgRx

- Overview State Management Patterns
- Observable Data Services & Event Bus
- Introduction to the Redux Pattern
- Understanding NgRx and know when to use it
- Using Store, Actions and Reducers
- Debugging NgRx using Redux Dev Tools
- Implementin & Using Selectors
- Using Effects
- Scaffolding using NgRx Schematics
- NgRx Entity
- Using NgRx Facades

## Installation & Setup

Installation:

```
npm i @ngrx/store @ngrx/effects @ngrx/enitity -S
npm i @ngrx/store-devtools -D
ng add @ngrx/schematics
```

## Scaffolding Guide (Module Sample: ngState)

### Root

Create Root State & Root actions:

```
 ng g store State --root true --statePath store
 ng g action store/app --group
```

> Note: Adjust as needed

Create Demos State:

ng g a demos/store/Demos --group
ng g r demos/store/Demos --group
ng g ef demos/store/Demos --group

> Note: Find out what scaffolding is good for you
