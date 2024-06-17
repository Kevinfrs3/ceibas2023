import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaCalidadComponent } from './politica-calidad.component';

describe('PoliticaCalidadComponent', () => {
  let component: PoliticaCalidadComponent;
  let fixture: ComponentFixture<PoliticaCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticaCalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
