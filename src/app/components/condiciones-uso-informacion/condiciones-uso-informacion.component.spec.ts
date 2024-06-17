import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesUsoInformacionComponent } from './condiciones-uso-informacion.component';

describe('CondicionesUsoInformacionComponent', () => {
  let component: CondicionesUsoInformacionComponent;
  let fixture: ComponentFixture<CondicionesUsoInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionesUsoInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesUsoInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
