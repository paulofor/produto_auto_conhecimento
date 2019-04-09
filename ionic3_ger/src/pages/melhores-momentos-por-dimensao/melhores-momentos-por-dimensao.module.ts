

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MelhoresMomentosPorDimensaoPage } from './melhores-momentos-por-dimensao';

@NgModule({
  declarations: [
    MelhoresMomentosPorDimensaoPage,
  ],
  imports: [
    IonicPageModule.forChild(MelhoresMomentosPorDimensaoPage),
    TranslateModule.forChild()
  ],
  exports: [
    MelhoresMomentosPorDimensaoPage
  ]
})
export class MelhoresMomentosPorDimensaoPageModule { }
