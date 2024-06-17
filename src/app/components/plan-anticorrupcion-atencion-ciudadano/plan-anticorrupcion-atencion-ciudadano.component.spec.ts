import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAnticorrupcionAtencionCiudadanoComponent } from './plan-anticorrupcion-atencion-ciudadano.component';

describe('PlanAnticorrupcionAtencionCiudadanoComponent', () => {
  let component: PlanAnticorrupcionAtencionCiudadanoComponent;
  let fixture: ComponentFixture<PlanAnticorrupcionAtencionCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanAnticorrupcionAtencionCiudadanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAnticorrupcionAtencionCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
