import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ElementInjectorService } from '../../services/element-injector.service';

@Component({
  selector: 'app-element-box',
  templateUrl: './element-box.component.html',
  styleUrls: ['./element-box.component.scss']
})
export class ElementBoxComponent implements OnInit {

  @ViewChild('box', { static: true }) box: ElementRef
  @Input() element: any;

  public loading = true;

  constructor(
    private elementInjector: ElementInjectorService
  ) { }

  ngOnInit(): void {
    this.elementInjector.injectElement(
      this.box,
      this.element
    );
    this.loadListener();
  }

  loadListener() {
    customElements.whenDefined(this.element.tag).then(
      () => setTimeout(() => this.loading = false, 1000)
    )
  }

}
