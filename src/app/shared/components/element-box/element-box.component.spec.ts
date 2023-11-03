import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBoxComponent } from './element-box.component';

describe('ElementBoxComponent', () => {
  let component: ElementBoxComponent;
  let fixture: ComponentFixture<ElementBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
