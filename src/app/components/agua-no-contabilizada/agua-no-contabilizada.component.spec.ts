import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguaNoContabilizadaComponent } from './agua-no-contabilizada.component';

describe('AguaNoContabilizadaComponent', () => {
  let component: AguaNoContabilizadaComponent;
  let fixture: ComponentFixture<AguaNoContabilizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AguaNoContabilizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AguaNoContabilizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
