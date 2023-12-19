import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KhqrDecodePageRoutingModule } from './khqr-decode-routing.module';
import { KhqrDecodePage } from './khqr-decode.page';
import { NgJsonEditorModule } from 'ang-jsoneditor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhqrDecodePageRoutingModule,
    NgJsonEditorModule,
  ],
  declarations: [KhqrDecodePage]
})
export class KhqrDecodePageModule {}
