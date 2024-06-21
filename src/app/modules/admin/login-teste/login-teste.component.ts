import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-teste',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-teste.component.html',
  styleUrl: './login-teste.component.scss'
})
export class LoginTesteComponent {
  email: string = '';
  senha: string = '';
}
