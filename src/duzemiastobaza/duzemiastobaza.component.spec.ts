import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuzemiastobazaComponent } from './duzemiastobaza.component';

describe('DuzemiastobazaComponent', () => {
  let component: DuzemiastobazaComponent;
  let fixture: ComponentFixture<DuzemiastobazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuzemiastobazaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuzemiastobazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
