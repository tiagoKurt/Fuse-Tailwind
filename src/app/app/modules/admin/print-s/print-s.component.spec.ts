import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSComponent } from './print-s.component';

describe('PrintSComponent', () => {
  let component: PrintSComponent;
  let fixture: ComponentFixture<PrintSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
