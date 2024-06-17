import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecucionPresupuestalComponent } from './ejecucion-presupuestal.component';

describe('EjecucionPresupuestalComponent', () => {
  let component: EjecucionPresupuestalComponent;
  let fixture: ComponentFixture<EjecucionPresupuestalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjecucionPresupuestalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecucionPresupuestalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
