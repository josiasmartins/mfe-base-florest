import { InjectionToken } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { IJoncaElement } from './jonca-element.interface';

export interface ElementBoxModuleConfiguration {
  environment: { production: boolean },
  listMfes: IJoncaElement[];
}


export const ELEMENT_CONFIG_TOKEN = new InjectionToken('ElementConfig');
