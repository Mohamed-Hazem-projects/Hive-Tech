import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsLevelsComponent } from './laptops-levels.component';

describe('LaptopsLevelsComponent', () => {
  let component: LaptopsLevelsComponent;
  let fixture: ComponentFixture<LaptopsLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopsLevelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopsLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
