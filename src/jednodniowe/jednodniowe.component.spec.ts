import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JednodnioweComponent } from './jednodniowe.component';

describe('JednodnioweComponent', () => {
  let component: JednodnioweComponent;
  let fixture: ComponentFixture<JednodnioweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JednodnioweComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JednodnioweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
