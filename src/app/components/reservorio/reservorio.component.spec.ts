import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservorioComponent } from './reservorio.component';

describe('ReservorioComponent', () => {
  let component: ReservorioComponent;
  let fixture: ComponentFixture<ReservorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
