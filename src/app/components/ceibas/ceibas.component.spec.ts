import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeibasComponent } from './ceibas.component';

describe('CeibasComponent', () => {
  let component: CeibasComponent;
  let fixture: ComponentFixture<CeibasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeibasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeibasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
