import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesAcueductoComponent } from './redes-acueducto.component';

describe('RedesAcueductoComponent', () => {
  let component: RedesAcueductoComponent;
  let fixture: ComponentFixture<RedesAcueductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesAcueductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesAcueductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
