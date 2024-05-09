import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLevelsComponent } from './custom-levels.component';

describe('CustomLevelsComponent', () => {
  let component: CustomLevelsComponent;
  let fixture: ComponentFixture<CustomLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLevelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
