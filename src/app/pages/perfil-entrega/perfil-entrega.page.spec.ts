import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEntregaPage } from './perfil-entrega.page';

describe('PerfilEntregaPage', () => {
  let component: PerfilEntregaPage;
  let fixture: ComponentFixture<PerfilEntregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEntregaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
