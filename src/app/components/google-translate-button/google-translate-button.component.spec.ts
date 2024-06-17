import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleTranslateButtonComponent } from './google-translate-button.component';

describe('GoogleTranslateButtonComponent', () => {
  let component: GoogleTranslateButtonComponent;
  let fixture: ComponentFixture<GoogleTranslateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleTranslateButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleTranslateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
