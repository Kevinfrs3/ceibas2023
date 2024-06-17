import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioDependenciasComponent } from './directorio-dependencias.component';

describe('DirectorioDependenciasComponent', () => {
  let component: DirectorioDependenciasComponent;
  let fixture: ComponentFixture<DirectorioDependenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorioDependenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorioDependenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
