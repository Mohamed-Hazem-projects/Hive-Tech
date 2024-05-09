import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsDealsComponent } from './laptops-deals.component';

describe('LaptopsDealsComponent', () => {
  let component: LaptopsDealsComponent;
  let fixture: ComponentFixture<LaptopsDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopsDealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopsDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
