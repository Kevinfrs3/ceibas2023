import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaTratamientoAguaPotableComponent } from './planta-tratamiento-agua-potable.component';

describe('PlantaTratamientoAguaPotableComponent', () => {
  let component: PlantaTratamientoAguaPotableComponent;
  let fixture: ComponentFixture<PlantaTratamientoAguaPotableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantaTratamientoAguaPotableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaTratamientoAguaPotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
