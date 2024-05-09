import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopOffersComponent } from './laptop-offers.component';

describe('LaptopOffersComponent', () => {
  let component: LaptopOffersComponent;
  let fixture: ComponentFixture<LaptopOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopOffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
