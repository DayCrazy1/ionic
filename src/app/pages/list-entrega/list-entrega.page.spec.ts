import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntregaPage } from './list-entrega.page';

describe('ListEntregaPage', () => {
  let component: ListEntregaPage;
  let fixture: ComponentFixture<ListEntregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEntregaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
