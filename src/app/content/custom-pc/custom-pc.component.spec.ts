import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPCComponent } from './custom-pc.component';

describe('CustomPCComponent', () => {
  let component: CustomPCComponent;
  let fixture: ComponentFixture<CustomPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
