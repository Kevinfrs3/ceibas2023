import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcorparticipaComponent } from './acorparticipa.component';

describe('AcorparticipaComponent', () => {
  let component: AcorparticipaComponent;
  let fixture: ComponentFixture<AcorparticipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcorparticipaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcorparticipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
