import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorDeVisitasComponent } from './contador-de-visitas.component';

describe('ContadorDeVisitasComponent', () => {
  let component: ContadorDeVisitasComponent;
  let fixture: ComponentFixture<ContadorDeVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorDeVisitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorDeVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
