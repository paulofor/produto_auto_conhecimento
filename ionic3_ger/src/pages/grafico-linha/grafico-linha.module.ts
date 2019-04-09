

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { GraficoLinhaPage } from './grafico-linha';

@NgModule({
  declarations: [
    GraficoLinhaPage,
  ],
  imports: [
    IonicPageModule.forChild(GraficoLinhaPage),
    TranslateModule.forChild()
  ],
  exports: [
    GraficoLinhaPage
  ]
})
export class GraficoLinhaPageModule { }
