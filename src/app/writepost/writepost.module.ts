import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WritepostPageRoutingModule } from './writepost-routing.module';

import { WritepostPage } from './writepost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WritepostPageRoutingModule
  ],
  declarations: [WritepostPage]
})
export class WritepostPageModule {}
