
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Screenshot } from '@ionic-native/screenshot';
import { ChartsModule } from 'ng2-charts';
import { CadastroMomentoPage } from '../pages/cadastro-momento/cadastro-momento';
import { GraficoLinhaPage } from '../pages/grafico-linha/grafico-linha';
import { MediasSemanaisPage } from '../pages/medias-semanais/medias-semanais';
import { MelhoresMomentosPorDimensaoPage } from '../pages/melhores-momentos-por-dimensao/melhores-momentos-por-dimensao';
import { ConfiguracaoPeriodoPage } from '../pages/configuracao-periodo/configuracao-periodo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MomentoApi } from '../shared/sdk';
import { PeriodoColetaApi } from '../shared/sdk';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroMomentoPage,
	
    GraficoLinhaPage,
	
    MediasSemanaisPage,
	
    MelhoresMomentosPorDimensaoPage,
	
    ConfiguracaoPeriodoPage,
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SDKBrowserModule.forRoot(),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroMomentoPage,
	
    GraficoLinhaPage,
	
    MediasSemanaisPage,
	
    MelhoresMomentosPorDimensaoPage,
	
    ConfiguracaoPeriodoPage,
	
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
	MomentoApi,
	
	PeriodoColetaApi,
	
    Screenshot
  ]
})
export class AppModule {}
