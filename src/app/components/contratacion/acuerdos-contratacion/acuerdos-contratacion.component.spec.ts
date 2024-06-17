import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdosContratacionComponent } from './acuerdos-contratacion.component';

describe('AcuerdosContratacionComponent', () => {
  let component: AcuerdosContratacionComponent;
  let fixture: ComponentFixture<AcuerdosContratacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcuerdosContratacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcuerdosContratacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
