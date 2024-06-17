import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeComisionEmpalmeComponent } from './informe-comision-empalme.component';

describe('InformeComisionEmpalmeComponent', () => {
  let component: InformeComisionEmpalmeComponent;
  let fixture: ComponentFixture<InformeComisionEmpalmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeComisionEmpalmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeComisionEmpalmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
