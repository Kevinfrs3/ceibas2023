import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesControlInternoComponent } from './informes-control-interno.component';

describe('InformesControlInternoComponent', () => {
  let component: InformesControlInternoComponent;
  let fixture: ComponentFixture<InformesControlInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesControlInternoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesControlInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
