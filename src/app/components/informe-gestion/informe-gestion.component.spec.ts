import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeGestionComponent } from './informe-gestion.component';

describe('InformeGestionComponent', () => {
  let component: InformeGestionComponent;
  let fixture: ComponentFixture<InformeGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
