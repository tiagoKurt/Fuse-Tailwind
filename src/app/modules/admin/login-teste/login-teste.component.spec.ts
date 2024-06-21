import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTesteComponent } from './login-teste.component';

describe('LoginTesteComponent', () => {
  let component: LoginTesteComponent;
  let fixture: ComponentFixture<LoginTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTesteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
