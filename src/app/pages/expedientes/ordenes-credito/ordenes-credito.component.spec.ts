import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesCreditoComponent } from './ordenes-credito.component';

describe('OrdenesCreditoComponent', () => {
  let component: OrdenesCreditoComponent;
  let fixture: ComponentFixture<OrdenesCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenesCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
