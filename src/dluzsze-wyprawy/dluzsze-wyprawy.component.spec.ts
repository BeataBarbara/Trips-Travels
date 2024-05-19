import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DluzszeWyprawyComponent } from './dluzsze-wyprawy.component';

describe('DluzszeWyprawyComponent', () => {
  let component: DluzszeWyprawyComponent;
  let fixture: ComponentFixture<DluzszeWyprawyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DluzszeWyprawyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DluzszeWyprawyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
