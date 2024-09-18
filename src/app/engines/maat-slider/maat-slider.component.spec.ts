import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaatSliderComponent } from './maat-slider.component';

describe('MaatSliderComponent', () => {
  let component: MaatSliderComponent;
  let fixture: ComponentFixture<MaatSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaatSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaatSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
