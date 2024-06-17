import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntesAutoridadesComponent } from './entes-autoridades.component';

describe('EntesAutoridadesComponent', () => {
  let component: EntesAutoridadesComponent;
  let fixture: ComponentFixture<EntesAutoridadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntesAutoridadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntesAutoridadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
