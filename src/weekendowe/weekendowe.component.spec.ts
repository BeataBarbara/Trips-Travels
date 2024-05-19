import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendoweComponent } from './weekendowe.component';

describe('WeekendoweComponent', () => {
  let component: WeekendoweComponent;
  let fixture: ComponentFixture<WeekendoweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekendoweComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeekendoweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
