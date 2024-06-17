import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicromedicionComponent } from './micromedicion.component';

describe('MicromedicionComponent', () => {
  let component: MicromedicionComponent;
  let fixture: ComponentFixture<MicromedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicromedicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicromedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
