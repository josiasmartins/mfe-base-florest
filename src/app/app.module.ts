import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagComponent } from './enums/tag-component.enum';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
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
