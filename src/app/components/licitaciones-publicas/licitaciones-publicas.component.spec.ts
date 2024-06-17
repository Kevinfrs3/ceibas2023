import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicitacionesPublicasComponent } from './licitaciones-publicas.component';

describe('LicitacionesPublicasComponent', () => {
  let component: LicitacionesPublicasComponent;
  let fixture: ComponentFixture<LicitacionesPublicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicitacionesPublicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicitacionesPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
