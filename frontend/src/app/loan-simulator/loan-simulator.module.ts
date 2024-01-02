import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanSimulatorPageRoutingModule } from './loan-simulator-routing.module';

import { LoanSimulatorPage } from './loan-simulator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanSimulatorPageRoutingModule
  ],
  declarations: [LoanSimulatorPage]
})
export class LoanSimulatorPageModule {}
