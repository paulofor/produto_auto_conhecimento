import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { Momento, MomentoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-medias-semanais',
  templateUrl: 'medias-semanais.html'
})
export class MediasSemanaisPage {
  item: Momento;

  constructor(public navCtrl: NavController, public srv: MomentoApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter MediasSemanaisPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad MediasSemanaisPage');
  }
  
  carregaItem() {
    var filtro = { 'where' : { 'id' : 1 }} ;
    this.srv.obtemElemento(filtro)
      .subscribe((result: Momento) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'MediasSemanaisPage');
  }
  
}
