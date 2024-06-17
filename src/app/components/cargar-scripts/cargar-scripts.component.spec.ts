import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarScriptsComponent } from './cargar-scripts.component';

describe('CargarScriptsComponent', () => {
  let component: CargarScriptsComponent;
  let fixture: ComponentFixture<CargarScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarScriptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
