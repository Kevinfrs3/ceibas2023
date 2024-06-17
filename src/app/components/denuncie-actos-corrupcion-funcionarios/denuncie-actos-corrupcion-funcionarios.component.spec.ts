import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenuncieActosCorrupcionFuncionariosComponent } from './denuncie-actos-corrupcion-funcionarios.component';

describe('DenuncieActosCorrupcionFuncionariosComponent', () => {
  let component: DenuncieActosCorrupcionFuncionariosComponent;
  let fixture: ComponentFixture<DenuncieActosCorrupcionFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenuncieActosCorrupcionFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenuncieActosCorrupcionFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
