import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { PeriodoColeta, PeriodoColetaApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-configuracao-periodo',
  templateUrl: 'configuracao-periodo.html'
})
export class ConfiguracaoPeriodoPage {
  item: PeriodoColeta;

  constructor(public navCtrl: NavController, public srv: PeriodoColetaApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ConfiguracaoPeriodoPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ConfiguracaoPeriodoPage');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: PeriodoColeta) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'ConfiguracaoPeriodoPage');
  }
  
}
