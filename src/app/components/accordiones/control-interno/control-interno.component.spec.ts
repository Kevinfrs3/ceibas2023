import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlInternoComponent } from './control-interno.component';

describe('ControlInternoComponent', () => {
  let component: ControlInternoComponent;
  let fixture: ComponentFixture<ControlInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlInternoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
