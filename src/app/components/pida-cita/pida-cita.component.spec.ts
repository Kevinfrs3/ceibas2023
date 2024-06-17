import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PidaCitaComponent } from './pida-cita.component';

describe('PidaCitaComponent', () => {
  let component: PidaCitaComponent;
  let fixture: ComponentFixture<PidaCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PidaCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PidaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
