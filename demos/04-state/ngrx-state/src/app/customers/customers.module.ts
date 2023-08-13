import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormattingModule } from '../shared/formatting/formatting.module';
import { customerState } from './state/customers.state';
import { CustomersComponent } from './component/customers.component';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './state/customers.effects';
import { CustomersRoutingModule } from './customers.routing.module';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    FormattingModule,
    HttpClientModule,
    CustomersRoutingModule,
    StoreModule.forFeature(customerState),
    EffectsModule.forFeature([CustomerEffects]),
  ]
})
export class CustomersModule { }
