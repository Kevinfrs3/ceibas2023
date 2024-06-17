import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionHistoricaEjecucionPresupuestalComponent } from './informacion-historica-ejecucion-presupuestal.component';

describe('InformacionHistoricaEjecucionPresupuestalComponent', () => {
  let component: InformacionHistoricaEjecucionPresupuestalComponent;
  let fixture: ComponentFixture<InformacionHistoricaEjecucionPresupuestalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionHistoricaEjecucionPresupuestalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionHistoricaEjecucionPresupuestalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
