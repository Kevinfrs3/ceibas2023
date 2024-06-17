import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesTrimestralesPqrComponent } from './informes-trimestrales-pqr.component';

describe('InformesTrimestralesPqrComponent', () => {
  let component: InformesTrimestralesPqrComponent;
  let fixture: ComponentFixture<InformesTrimestralesPqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesTrimestralesPqrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesTrimestralesPqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
