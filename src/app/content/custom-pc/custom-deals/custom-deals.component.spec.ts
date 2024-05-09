import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDealsComponent } from './custom-deals.component';

describe('CustomDealsComponent', () => {
  let component: CustomDealsComponent;
  let fixture: ComponentFixture<CustomDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
