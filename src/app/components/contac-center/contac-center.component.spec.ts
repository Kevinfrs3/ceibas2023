import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacCenterComponent } from './contac-center.component';

describe('ContacCenterComponent', () => {
  let component: ContacCenterComponent;
  let fixture: ComponentFixture<ContacCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
