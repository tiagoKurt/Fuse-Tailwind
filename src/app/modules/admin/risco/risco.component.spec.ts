import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiscoComponent } from './risco.component';

describe('RiscoComponent', () => {
  let component: RiscoComponent;
  let fixture: ComponentFixture<RiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiscoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
