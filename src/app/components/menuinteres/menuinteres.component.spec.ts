import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuinteresComponent } from './menuinteres.component';

describe('MenuinteresComponent', () => {
  let component: MenuinteresComponent;
  let fixture: ComponentFixture<MenuinteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuinteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuinteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
