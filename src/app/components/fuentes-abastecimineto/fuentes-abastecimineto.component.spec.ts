import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuentesAbasteciminetoComponent } from './fuentes-abastecimineto.component';

describe('FuentesAbasteciminetoComponent', () => {
  let component: FuentesAbasteciminetoComponent;
  let fixture: ComponentFixture<FuentesAbasteciminetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuentesAbasteciminetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuentesAbasteciminetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
