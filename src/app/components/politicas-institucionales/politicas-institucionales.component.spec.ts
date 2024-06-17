import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasInstitucionalesComponent } from './politicas-institucionales.component';

describe('PoliticasInstitucionalesComponent', () => {
  let component: PoliticasInstitucionalesComponent;
  let fixture: ComponentFixture<PoliticasInstitucionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticasInstitucionalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticasInstitucionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
