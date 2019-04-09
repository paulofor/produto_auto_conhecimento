

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MediasSemanaisPage } from './medias-semanais';

@NgModule({
  declarations: [
    MediasSemanaisPage,
  ],
  imports: [
    IonicPageModule.forChild(MediasSemanaisPage),
    TranslateModule.forChild()
  ],
  exports: [
    MediasSemanaisPage
  ]
})
export class MediasSemanaisPageModule { }
