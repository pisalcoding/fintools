import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanSimulatorPage } from './loan-simulator.page';

const routes: Routes = [
  {
    path: '',
    component: LoanSimulatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanSimulatorPageRoutingModule {}
