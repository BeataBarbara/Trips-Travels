import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkoloweekendoweComponent } from './okoloweekendowe.component';

describe('OkoloweekendoweComponent', () => {
  let component: OkoloweekendoweComponent;
  let fixture: ComponentFixture<OkoloweekendoweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OkoloweekendoweComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OkoloweekendoweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
