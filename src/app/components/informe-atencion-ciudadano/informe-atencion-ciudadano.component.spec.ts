import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeAtencionCiudadanoComponent } from './informe-atencion-ciudadano.component';

describe('InformeAtencionCiudadanoComponent', () => {
  let component: InformeAtencionCiudadanoComponent;
  let fixture: ComponentFixture<InformeAtencionCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeAtencionCiudadanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeAtencionCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
