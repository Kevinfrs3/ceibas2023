import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaPersonalComponent } from './planta-personal.component';

describe('PlantaPersonalComponent', () => {
  let component: PlantaPersonalComponent;
  let fixture: ComponentFixture<PlantaPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantaPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
