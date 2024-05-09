import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmolGearCardComponent } from './smol-gear-card.component';

describe('SmolGearCardComponent', () => {
  let component: SmolGearCardComponent;
  let fixture: ComponentFixture<SmolGearCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmolGearCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmolGearCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
