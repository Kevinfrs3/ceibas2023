import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaPercepcionComponent } from './encuesta-percepcion.component';

describe('EncuestaPercepcionComponent', () => {
  let component: EncuestaPercepcionComponent;
  let fixture: ComponentFixture<EncuestaPercepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaPercepcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaPercepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
