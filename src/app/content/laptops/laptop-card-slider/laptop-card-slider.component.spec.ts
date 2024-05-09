import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopCardSliderComponent } from './laptop-card-slider.component';

describe('LaptopCardSliderComponent', () => {
  let component: LaptopCardSliderComponent;
  let fixture: ComponentFixture<LaptopCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopCardSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
