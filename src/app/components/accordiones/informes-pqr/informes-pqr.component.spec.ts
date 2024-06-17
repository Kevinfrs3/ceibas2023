import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesPqrComponent } from './informes-pqr.component';

describe('InformesPqrComponent', () => {
  let component: InformesPqrComponent;
  let fixture: ComponentFixture<InformesPqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesPqrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesPqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
