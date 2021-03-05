import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WritepostPage } from './writepost.page';

const routes: Routes = [
  {
    path: '',
    component: WritepostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WritepostPageRoutingModule {}
