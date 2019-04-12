import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { Momento, MomentoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-grafico-linha',
  templateUrl: 'grafico-linha.html'
})
export class GraficoLinhaPage {
  item: Momento;

  constructor(public navCtrl: NavController, public srv: MomentoApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter GraficoLinhaPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad GraficoLinhaPage');
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
    this.screenshot.save('jpg', 100, 'GraficoLinhaPage');
  }

  criaImagem() {
    //var cv01: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('cv01');
    //var img1: HTMLImageElement = <HTMLImageElement>document.getElementById('img1');
    //var ctx = cv01.getContext("2d"); 
    //img1.src = cv01.toDataURL('png');
    //cv01.hidden = true;
  }


  public barChartOptions: any = {
    legend: {
      display: true,
      labels: {
        boxWidth: 20,
        boxHeight: 2
      }
    },
    animation: {
      onComplete: this.criaImagem
    },
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public barChartLabels: string[] = ['22/12', '28/12', '02/01', '04/01', '06/01', '08/01', '10/01'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;


  public barChartData: any[] = [
    { data: [30, 30, 30, 30, 30, 35, 35], label: 'Repetição 1' },
    { data: [25, 25, 25, 25, 25, 30, 30], label: 'Repetição 2' },
    { data: [20, 20, 20, 20, 20, 25, 25], label: 'Repetição 3' }
  ];
  


  public lineChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Emocional' },
    { data: [20, 59, 19, 81, 56, 55, 40], label: 'Fisico' },
    { data: [65, 59, 80, 38, 56, 42, 40], label: 'Intelectual' },
  ];
  public lineChartLabels: string[] = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7'];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: any[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(0,0,0,0)',
    },
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,0,0)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
}
