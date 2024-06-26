import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacaoRiscoComponent } from './identificacao-risco.component';

describe('IdentificacaoRiscoComponent', () => {
  let component: IdentificacaoRiscoComponent;
  let fixture: ComponentFixture<IdentificacaoRiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificacaoRiscoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificacaoRiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
