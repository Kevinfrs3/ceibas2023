import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosInstitucionalesComponent } from './objetivos-institucionales.component';

describe('ObjetivosInstitucionalesComponent', () => {
  let component: ObjetivosInstitucionalesComponent;
  let fixture: ComponentFixture<ObjetivosInstitucionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivosInstitucionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivosInstitucionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
