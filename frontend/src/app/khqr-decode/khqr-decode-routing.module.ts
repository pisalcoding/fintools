import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhqrDecodePage } from './khqr-decode.page';

const routes: Routes = [
  {
    path: '',
    component: KhqrDecodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhqrDecodePageRoutingModule {}
