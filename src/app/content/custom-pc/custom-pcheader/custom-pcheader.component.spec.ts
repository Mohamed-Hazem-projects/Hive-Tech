import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPCHeaderComponent } from './custom-pcheader.component';

describe('CustomPCHeaderComponent', () => {
  let component: CustomPCHeaderComponent;
  let fixture: ComponentFixture<CustomPCHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPCHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomPCHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
