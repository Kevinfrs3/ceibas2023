import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraOrganicaComponent } from './estructura-organica.component';

describe('EstructuraOrganicaComponent', () => {
  let component: EstructuraOrganicaComponent;
  let fixture: ComponentFixture<EstructuraOrganicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstructuraOrganicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraOrganicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
