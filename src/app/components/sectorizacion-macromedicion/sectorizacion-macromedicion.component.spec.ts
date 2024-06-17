import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorizacionMacromedicionComponent } from './sectorizacion-macromedicion.component';

describe('SectorizacionMacromedicionComponent', () => {
  let component: SectorizacionMacromedicionComponent;
  let fixture: ComponentFixture<SectorizacionMacromedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorizacionMacromedicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorizacionMacromedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
