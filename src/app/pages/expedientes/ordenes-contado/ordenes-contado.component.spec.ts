import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesContadoComponent } from './ordenes-contado.component';

describe('OrdenesContadoComponent', () => {
  let component: OrdenesContadoComponent;
  let fixture: ComponentFixture<OrdenesContadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenesContadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesContadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
