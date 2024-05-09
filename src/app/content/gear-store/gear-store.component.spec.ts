import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearStoreComponent } from './gear-store.component';

describe('GearStoreComponent', () => {
  let component: GearStoreComponent;
  let fixture: ComponentFixture<GearStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GearStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
