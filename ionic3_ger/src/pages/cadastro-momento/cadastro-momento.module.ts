

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CadastroMomentoPage } from './cadastro-momento';

@NgModule({
  declarations: [
    CadastroMomentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroMomentoPage),
    TranslateModule.forChild()
  ],
  exports: [
    CadastroMomentoPage
  ]
})
export class CadastroMomentoPageModule { }
