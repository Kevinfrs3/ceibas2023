import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdosJuntaComponent } from './acuerdos-junta.component';

describe('AcuerdosJuntaComponent', () => {
  let component: AcuerdosJuntaComponent;
  let fixture: ComponentFixture<AcuerdosJuntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcuerdosJuntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdosJuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
