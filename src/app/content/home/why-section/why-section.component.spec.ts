import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySectionComponent } from './why-section.component';

describe('WhySectionComponent', () => {
  let component: WhySectionComponent;
  let fixture: ComponentFixture<WhySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
