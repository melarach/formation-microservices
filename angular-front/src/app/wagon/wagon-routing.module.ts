import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWagonComponent } from './list-wagon/list-wagon.component';

const routes: Routes = [{path: '', component:ListWagonComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WagonRoutingModule { }
