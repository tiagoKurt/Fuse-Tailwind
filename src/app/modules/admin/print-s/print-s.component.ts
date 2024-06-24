import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { MessagesService } from 'app/layout/common/messages/messages.service';
import { CadastrarUsuarioService } from 'app/services/cadastrarUsuario';
import { CadastroUsuario } from 'app/types/cadastroUsuario';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-print-s',
  standalone: true,
  imports: [FormsModule,FuseHighlightComponent,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule],
  templateUrl: './print-s.component.html',
  styleUrl: './print-s.component.scss'
})
export class PrintSComponent {
  nome: string = '';
  cpf: string = '';
  email: string = '';
  telefone: string = '';
  senha: string = '';
  isRegistering: boolean = true;


  constructor(
    private cadastroUsuarioService: CadastrarUsuarioService, private messageService: MessagesService, private router : Router){}

    irParaLogin() {
      console.log('teste')
      this.isRegistering = false;
    }
  
    irParaCadastro() {
      this.isRegistering = true;
    }

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

