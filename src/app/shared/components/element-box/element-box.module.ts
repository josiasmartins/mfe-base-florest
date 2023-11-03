import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementBoxComponent } from './element-box.component';
import { ElementLoaderModule } from '../element-loader/element-loader.module';
import { ELEMENT_CONFIG_TOKEN, ElementBoxModuleConfiguration } from './configuration';
import { ElementInjectorService } from '../../services/element-injector.service';



@NgModule({
  declarations: [ElementBoxComponent],
  imports: [
    CommonModule,
    ElementLoaderModule
  ],
  exports: [ElementBoxComponent]
})
export class ElementBoxModule {

  public static forRoot(config: ElementBoxModuleConfiguration): ModuleWithProviders<ElementBoxModule> {
    return {
      ngModule: ElementBoxModule,
      providers: [
        ElementInjectorService,
        {
          provide: ELEMENT_CONFIG_TOKEN,
          useValue: config
        }
      ]
    }
  }

}
