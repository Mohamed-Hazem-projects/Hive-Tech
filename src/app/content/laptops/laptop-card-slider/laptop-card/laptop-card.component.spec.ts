import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopCardComponent } from './laptop-card.component';

describe('LaptopCardComponent', () => {
  let component: LaptopCardComponent;
  let fixture: ComponentFixture<LaptopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
