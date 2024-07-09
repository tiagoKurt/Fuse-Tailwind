import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsequenciasComponent } from './consequencias.component';

describe('ConsequenciasComponent', () => {
  let component: ConsequenciasComponent;
  let fixture: ComponentFixture<ConsequenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsequenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsequenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
