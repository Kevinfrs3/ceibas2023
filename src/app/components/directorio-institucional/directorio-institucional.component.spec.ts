import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioInstitucionalComponent } from './directorio-institucional.component';

describe('DirectorioInstitucionalComponent', () => {
  let component: DirectorioInstitucionalComponent;
  let fixture: ComponentFixture<DirectorioInstitucionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorioInstitucionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorioInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
