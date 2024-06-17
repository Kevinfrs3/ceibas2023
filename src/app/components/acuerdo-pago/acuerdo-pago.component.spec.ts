import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoPagoComponent } from './acuerdo-pago.component';

describe('AcuerdoPagoComponent', () => {
  let component: AcuerdoPagoComponent;
  let fixture: ComponentFixture<AcuerdoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcuerdoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
