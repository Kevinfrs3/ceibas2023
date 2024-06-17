import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetoSocialComponent } from './objeto-social.component';

describe('ObjetoSocialComponent', () => {
  let component: ObjetoSocialComponent;
  let fixture: ComponentFixture<ObjetoSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetoSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
