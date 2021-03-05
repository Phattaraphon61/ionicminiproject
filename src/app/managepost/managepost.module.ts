import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagepostPageRoutingModule } from './managepost-routing.module';

import { ManagepostPage } from './managepost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagepostPageRoutingModule
  ],
  declarations: [ManagepostPage]
})
export class ManagepostPageModule {}
