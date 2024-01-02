import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'khqr-decode',
    pathMatch: 'full'
  },
  {
    path: 'khqr-decode',
    loadChildren: () => import('./khqr-decode/khqr-decode.module').then( m => m.KhqrDecodePageModule)
  },
  {
    path: 'evitation',
    loadChildren: () => import('./evitation/evitation.module').then( m => m.EvitationPageModule)
  },
  {
    path: 'loan-simulator',
    loadChildren: () => import('./loan-simulator/loan-simulator.module').then( m => m.LoanSimulatorPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
