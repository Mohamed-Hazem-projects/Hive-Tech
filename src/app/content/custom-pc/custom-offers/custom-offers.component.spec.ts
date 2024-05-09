import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOffersComponent } from './custom-offers.component';

describe('CustomOffersComponent', () => {
  let component: CustomOffersComponent;
  let fixture: ComponentFixture<CustomOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomOffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
