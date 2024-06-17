import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparenciComponent } from './transparenci.component';

describe('TransparenciComponent', () => {
  let component: TransparenciComponent;
  let fixture: ComponentFixture<TransparenciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransparenciComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
