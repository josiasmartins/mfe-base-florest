import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getElementByRoute } from './config/elements-list';

@Component({
  selector: 'mfe-base-forests',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mfe-base-forests';

  @Input() initialroute: string;
  @Input() config: string;

  @Input() gtmKey: string;
  @Input() dlbTicket: string;
  @Output() onError = new EventEmitter();

  public element;

  constructor(
    private readonly router: Router,
    private readonly taggingContext: TaggingContextService
  ) {}

  public ngOnInit() {
    this.loadGoogleTagManager(this.gtmKey);
    this.config = this.config || '/passo/conteudo';
    this.element = getElementByRoute(this.config);
  }

  private loadGoogleTagManager(gtmKey: string) {
    // TODO
  }

  

}
