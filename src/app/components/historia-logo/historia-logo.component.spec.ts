import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaLogoComponent } from './historia-logo.component';

describe('HistoriaLogoComponent', () => {
  let component: HistoriaLogoComponent;
  let fixture: ComponentFixture<HistoriaLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
