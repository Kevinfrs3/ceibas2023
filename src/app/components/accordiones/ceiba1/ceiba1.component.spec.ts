import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ceiba1Component } from './ceiba1.component';

describe('Ceiba1Component', () => {
  let component: Ceiba1Component;
  let fixture: ComponentFixture<Ceiba1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ceiba1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ceiba1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
