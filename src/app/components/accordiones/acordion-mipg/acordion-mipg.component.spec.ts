import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordionMipgComponent } from './acordion-mipg.component';

describe('AcordionMipgComponent', () => {
  let component: AcordionMipgComponent;
  let fixture: ComponentFixture<AcordionMipgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordionMipgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcordionMipgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
