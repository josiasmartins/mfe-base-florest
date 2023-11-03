import { TestBed } from '@angular/core/testing';

import { ElementInjectorService } from './element-injector.service';

describe('ElementInjectorService', () => {
  let service: ElementInjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementInjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
