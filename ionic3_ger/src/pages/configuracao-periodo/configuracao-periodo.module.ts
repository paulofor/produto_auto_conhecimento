

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ConfiguracaoPeriodoPage } from './configuracao-periodo';

@NgModule({
  declarations: [
    ConfiguracaoPeriodoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguracaoPeriodoPage),
    TranslateModule.forChild()
  ],
  exports: [
    ConfiguracaoPeriodoPage
  ]
})
export class ConfiguracaoPeriodoPageModule { }
