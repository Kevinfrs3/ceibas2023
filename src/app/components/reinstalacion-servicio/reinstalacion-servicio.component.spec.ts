import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinstalacionServicioComponent } from './reinstalacion-servicio.component';

describe('ReinstalacionServicioComponent', () => {
  let component: ReinstalacionServicioComponent;
  let fixture: ComponentFixture<ReinstalacionServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinstalacionServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinstalacionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
