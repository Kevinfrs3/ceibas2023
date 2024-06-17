import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoFinancierosComponent } from './estado-financieros.component';

describe('EstadoFinancierosComponent', () => {
  let component: EstadoFinancierosComponent;
  let fixture: ComponentFixture<EstadoFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoFinancierosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
