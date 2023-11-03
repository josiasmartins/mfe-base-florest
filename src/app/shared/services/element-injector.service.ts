import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementInjectorService {

  private renderer: Renderer2

  constructor(
    private readonly rendererFactory: RendererFactory2,
    @Inject(ELEMENT_CONFIG_TOKEN) private elementBoxConfig:
  ) { }
}
