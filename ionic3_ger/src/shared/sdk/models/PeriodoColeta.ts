
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface PeriodoColetaInterface {
}

export class PeriodoColeta implements PeriodoColetaInterface {
  constructor(data?: PeriodoColetaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "PeriodoColeta";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of PeriodoColeta for dynamic purposes.
  **/
  public static factory(data: PeriodoColetaInterface): PeriodoColeta{
    return new PeriodoColeta(data);
  }
  /**
  * @method getModelDefinition
  * @author Gerador Java
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'PeriodoColeta',
      plural: 'PeriodoColetas',
      path: 'PeriodoColetas',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}