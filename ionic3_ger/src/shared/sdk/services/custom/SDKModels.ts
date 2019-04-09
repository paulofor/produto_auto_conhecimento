
import { Injectable } from '@angular/core';
import { Container } from '../../models/Container';
import { User } from '../../models/User';
import { Momento } from '../../models/Momento';
import { PeriodoColeta } from '../../models/PeriodoColeta';
export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
	Momento: Momento,
	PeriodoColeta: PeriodoColeta,
	User: User,
    Container: Container
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
