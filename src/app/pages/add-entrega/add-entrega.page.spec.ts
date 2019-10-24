import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntregaPage } from './add-entrega.page';

describe('AddEntregaPage', () => {
  let component: AddEntregaPage;
  let fixture: ComponentFixture<AddEntregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEntregaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
