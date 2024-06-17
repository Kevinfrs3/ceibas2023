import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesRendicionCuentasComponent } from './informes-rendicion-cuentas.component';

describe('InformesRendicionCuentasComponent', () => {
  let component: InformesRendicionCuentasComponent;
  let fixture: ComponentFixture<InformesRendicionCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesRendicionCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesRendicionCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
