import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { Momento, MomentoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-cadastro-momento',
  templateUrl: 'cadastro-momento.html'
})
export class CadastroMomentoPage {
  item: Momento;

  constructor(public navCtrl: NavController, public srv: MomentoApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CadastroMomentoPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad CadastroMomentoPage');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: Momento) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'CadastroMomentoPage');
  }
  
}
