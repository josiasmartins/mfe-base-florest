import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementLoaderComponent } from './element-loader.component';

describe('ElementLoaderComponent', () => {
  let component: ElementLoaderComponent;
  let fixture: ComponentFixture<ElementLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
