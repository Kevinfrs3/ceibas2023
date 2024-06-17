import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesEncuestasPercepcionComponent } from './informes-encuestas-percepcion.component';

describe('InformesEncuestasPercepcionComponent', () => {
  let component: InformesEncuestasPercepcionComponent;
  let fixture: ComponentFixture<InformesEncuestasPercepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesEncuestasPercepcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesEncuestasPercepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
