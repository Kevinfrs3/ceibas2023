import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaPrensaComponent } from './sala-prensa.component';

describe('SalaPrensaComponent', () => {
  let component: SalaPrensaComponent;
  let fixture: ComponentFixture<SalaPrensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaPrensaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaPrensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


