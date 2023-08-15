import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormattingModule } from '../shared/formatting/formatting.module';
import { CustomersComponent } from './component/customers.component';
import { CustomersRoutingModule } from './customers.routing.module';
import { customerState } from './state/customers.state';
// import using alias because file could container more than one functional effect
import * as customerEffects from './state/customers.effects';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    FormattingModule,
    HttpClientModule,
    MatToolbarModule,
    ReactiveFormsModule,
    CustomersRoutingModule,
    StoreModule.forFeature(customerState),
    EffectsModule.forFeature([customerEffects]),
  ]
})
export class CustomersModule { }
