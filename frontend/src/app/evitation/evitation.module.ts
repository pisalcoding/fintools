import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvitationPageRoutingModule } from './evitation-routing.module';

import { EvitationPage } from './evitation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvitationPageRoutingModule
  ],
  declarations: [EvitationPage]
})
export class EvitationPageModule {}
