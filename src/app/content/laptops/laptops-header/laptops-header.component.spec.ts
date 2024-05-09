import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsHeaderComponent } from './laptops-header.component';

describe('LaptopsHeaderComponent', () => {
  let component: LaptopsHeaderComponent;
  let fixture: ComponentFixture<LaptopsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
