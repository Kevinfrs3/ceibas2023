import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemaIntegradoDeGestionComponent } from './sig.component';

describe('SitemaIntegradoDeGestionComponent', () => {
  let component: SitemaIntegradoDeGestionComponent;
  let fixture: ComponentFixture<SitemaIntegradoDeGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitemaIntegradoDeGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemaIntegradoDeGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
