
/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PeriodoColeta } from '../../models/PeriodoColeta';
import { SocketConnection } from '../../sockets/socket.connections';
import { PERIODOCOLETA } from '../../../../dados/periodoColeta';
//import { of } from 'rxjs';
//Versao Ionic
import { of } from 'rxjs/observable/of';
import {PERIODOCOLETA_CONFIGURACAOPERIODOPAGE} from  '../../../../dados/periodoColeta';
/**
 * Api services for the `Aplicacao` model.
 */
@Injectable()
export class PeriodoColetaApi extends BaseLoopBackApi {

  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, errorHandler);
  }

  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/periodoColetas";
    let _routeParams: any = {};
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Patch attributes for a model instance and persist it into the data source.
   *
   * @param {any} id aplicacao id
   *
   * @param {object} data Request data.
   *
   *  - `data` ? `{object}` - An object of model property name/value pairs
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Aplicacao` object.)
   * </em>
   */
  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/periodoColetas/:id";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `Aplicacao`.
   */
  public getModelName() {
    return "PeriodoColeta";
  }
  
  obtemPrimeiro(filter: LoopBackFilter = {}, customHeaders?: Function) : Observable<PeriodoColeta> {
    return of(PERIODOCOLETA[0]);
  }
  obtemLista(filter: LoopBackFilter = {}, customHeaders?: Function) : Observable<PeriodoColeta[]> {
    return of(PERIODOCOLETA);
  }
  obtemElemento(filter: LoopBackFilter = {}, customHeaders?: Function) : Observable<PeriodoColeta> {
    return of(PERIODOCOLETA[filter.where.id]);
  }

	getConfiguracaoPeriodoPageLoad(filter: LoopBackFilter = {}) : Observable<PeriodoColeta> {
		return of (PERIODOCOLETA_CONFIGURACAOPERIODOPAGE);
	}
  
}