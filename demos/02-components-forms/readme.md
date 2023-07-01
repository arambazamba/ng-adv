# Components & Forms Deep Dive

## Demos

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

## Convert App to Standalone Components

Existing apps can be migrated to Standalone Components using Schematics:

```
ng g @angular/core:standalone
```