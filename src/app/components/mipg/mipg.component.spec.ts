import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MipgComponent } from './mipg.component';

describe('MipgComponent', () => {
  let component: MipgComponent;
  let fixture: ComponentFixture<MipgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MipgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MipgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
