import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaTratamientoAguaResidualesComponent } from './planta-tratamiento-agua-residuales.component';

describe('PlantaTratamientoAguaResidualesComponent', () => {
  let component: PlantaTratamientoAguaResidualesComponent;
  let fixture: ComponentFixture<PlantaTratamientoAguaResidualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantaTratamientoAguaResidualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaTratamientoAguaResidualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
