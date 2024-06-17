import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BocatomaComponent } from './bocatoma.component';

describe('BocatomaComponent', () => {
  let component: BocatomaComponent;
  let fixture: ComponentFixture<BocatomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BocatomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BocatomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
