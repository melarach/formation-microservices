import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WagonRoutingModule } from './wagon-routing.module';
import { ListWagonComponent } from './list-wagon/list-wagon.component';


@NgModule({
  declarations: [ListWagonComponent],
  imports: [
    CommonModule,
    WagonRoutingModule
  ]
})
export class WagonModule { }
