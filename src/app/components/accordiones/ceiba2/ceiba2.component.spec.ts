import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ceiba2Component } from './ceiba2.component';

describe('Ceiba2Component', () => {
  let component: Ceiba2Component;
  let fixture: ComponentFixture<Ceiba2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ceiba2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ceiba2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
