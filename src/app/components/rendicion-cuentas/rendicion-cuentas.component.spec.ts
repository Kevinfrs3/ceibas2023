import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendicionCuentasComponent } from './rendicion-cuentas.component';

describe('RendicionCuentasComponent', () => {
  let component: RendicionCuentasComponent;
  let fixture: ComponentFixture<RendicionCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendicionCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendicionCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
