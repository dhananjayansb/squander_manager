import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NonbioPageRoutingModule } from './nonbio-routing.module';

import { NonbioPage } from './nonbio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NonbioPageRoutingModule
  ],
  declarations: [NonbioPage]
})
export class NonbioPageModule {}
