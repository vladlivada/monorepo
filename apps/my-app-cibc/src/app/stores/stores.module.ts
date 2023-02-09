import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from 'libs/core/src';
import { StoreRoutingModule } from './stores.routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreComponent,
    StoreRoutingModule
  ]
})
export class StoresModule { }
