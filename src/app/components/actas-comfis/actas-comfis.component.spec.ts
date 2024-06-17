import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActasComfisComponent } from './actas-comfis.component';

describe('ActasComfisComponent', () => {
  let component: ActasComfisComponent;
  let fixture: ComponentFixture<ActasComfisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActasComfisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActasComfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
