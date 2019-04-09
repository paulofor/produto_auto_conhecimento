
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface MomentoInterface {
	"id"?: number;
	"notaEmocional"?: number;
	"notaFisico"?: number;
	"notaIntelectual"?: number;
	"dataHora"?: Date;
}

export class Momento implements MomentoInterface {
	id?: number;
	notaEmocional?: number;
	notaFisico?: number;
	notaIntelectual?: number;
	dataHora?: Date;
  constructor(data?: MomentoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Momento";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Momento for dynamic purposes.
  **/
  public static factory(data: MomentoInterface): Momento{
    return new Momento(data);
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
      name: 'Momento',
      plural: 'Momentos',
      path: 'Momentos',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "notaEmocional" : {
        	name : "notaEmocional",
        	type : "number"
        },
        "notaFisico" : {
        	name : "notaFisico",
        	type : "number"
        },
        "notaIntelectual" : {
        	name : "notaIntelectual",
        	type : "number"
        },
        "dataHora" : {
        	name : "dataHora",
        	type : "Date"
        },
      },
      relations: {
      }
    }
  }
}