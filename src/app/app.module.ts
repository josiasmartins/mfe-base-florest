import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagComponent } from './enums/tag-component.enum';
import { createCustomElement } from '@angular/elements';
import { ElementBoxComponent } from './shared/element-box/element-box.component';
import { ElementLoaderComponent } from './shared/components/element-loader/element-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementBoxComponent,
    ElementLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });

    if (!customElements.get(TagComponent.TAG)) {
      customElements.define(TagComponent.TAG, el);
    }
  }

  ngDoBootstrap() {}

}

[
  [ 1, 2, 3, 3 ],
  [ 1, 2, 3, 3 ],
]
