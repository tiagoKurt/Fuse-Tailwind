import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { ConsequenciaService, Consequencias } from 'app/services/consequencia.service';

@Component({
  selector: 'app-consequencias',
  standalone: true,
  imports: [MatLabel,
  MatFormField,
  CommonModule,
  FormsModule,
  FuseHighlightComponent,
  MatButtonModule,
  MatTabsModule,
  MatFormFieldModule,
  MatOptionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  ReactiveFormsModule ],
  templateUrl: './consequencias.component.html',
  styleUrl: './consequencias.component.scss'
})
export class ConsequenciasComponent implements OnInit{
  consequencia : string = '';
  consequenciasLista : Consequencias[] = [];
  errorMessage: string = '';
  constructor(private consequenciasService: ConsequenciaService){}

  ngOnInit(): void{
    this.consequenciasService.pegarConsequencias().subscribe(
      (data : Consequencias[])=>{
        this.consequenciasLista = data;
      },
      (error : any)=>{
        this.errorMessage = 'Ainda não possui consequencias cadastradas';
      }
    )
  }

  salvarConsequencia(){
    const consequencia: Consequencias = {
      consequencia : this.consequencia
    }
    
    this.consequenciasService.criarConsequencias(consequencia).subscribe(
      (response) =>{
        this.consequenciasLista.push(consequencia);
        this.consequencia = '';
        console.log('Cadastrou')
      },
      (error) =>{
        console.log('Deu erro')
      }
    )
  }

  removerConsequencia(consequencia: Consequencias) {
    this.consequenciasService.deletarConsequencias(consequencia.id!).subscribe(
      () => {
        this.consequenciasLista = this.consequenciasLista.filter(o => o !== consequencia);
      },
      (error) => {
        console.error('Erro ao remover objetivo:', error);
      }
    );
  }
}
