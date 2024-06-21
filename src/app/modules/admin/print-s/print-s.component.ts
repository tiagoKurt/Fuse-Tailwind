import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'app/layout/common/messages/messages.service';
import { CadastrarUsuarioService } from 'app/services/cadastrarUsuario';
import { CadastroUsuario } from 'app/types/cadastroUsuario';

@Component({
  selector: 'app-print-s',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './print-s.component.html',
  styleUrl: './print-s.component.scss'
})
export class PrintSComponent {
  nome: string = '';
  cpf: string = '';
  email: string = '';
  telefone: string = '';
  senha: string = '';

  constructor(
    private cadastroUsuarioService: CadastrarUsuarioService, private messageService: MessagesService, private router : Router){}

  salvarUsuario() {
    const usuario: CadastroUsuario = {
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      telefone: this.telefone,
      senha: this.senha,
    };

    this.cadastroUsuarioService.criarUsuario(usuario).subscribe(
      (response) => {
        console.log('Usuario Cadastrado com sucesso');
      },
      (error) => {
        console.log('Erro ao cadastrar!');
      }
    );
  }
}

