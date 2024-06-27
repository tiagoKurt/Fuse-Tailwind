import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { ObjetivosEstrategicosService, Objetivos} from 'app/services/ObjetivosEstrategicos.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-identificacao-risco',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    FuseHighlightComponent,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule  
  ],
  templateUrl: './identificacao-risco.component.html',
  styleUrl: './identificacao-risco.component.scss',
})
export class IdentificacaoRiscoComponent {
  toppings = new FormControl('');
  toppingList: string[] = ['Raro', 'Improvável', 'Possível', 'Provável', 'Quase certo'];

  getClass(topping: string): string {
    switch (topping) {
      case 'Raro':
        return 'raro';
      case 'Improvável':
        return 'improvavel';
      case 'Possível':
        return 'possivel';
      case 'Provável':
        return 'provavel';
      case 'Quase certo':
        return 'quase-certo';
      default:
        return '';
    }
  }

  objetivoEstrategicoo: string = '';
  objetivoOperacionalInput: string = '';
  objetivosEstrategicos: Objetivos[] = [];
  objetivosOperacionais: Objetivos[] = [];
  errorMessage: string = '';
  errorMessage2: string = '';

  constructor(private objetivosEstrategicosService: ObjetivosEstrategicosService) { }

  ngOnInit(): void {
    this.objetivosEstrategicosService.pegarObjetivos().subscribe(
      (data: Objetivos[]) => {
        this.objetivosEstrategicos = data.filter(objetivo => objetivo.tipoObjetivo === 'estrategico');
        this.objetivosOperacionais = data.filter(objetivo => objetivo.tipoObjetivo === 'operacional');
      },
      (error) => {
        this.errorMessage = 'Ainda não possui objetivos estratégicos cadastrados!';
        console.error('Erro ao carregar os objetivos estratégicos:', error);
      }
    );
  }

  salvarObjetivo() {
    const objetivo: Objetivos = {
      tipoObjetivo: 'estrategico',
      objetivo: this.objetivoEstrategicoo
    };

    this.objetivosEstrategicosService.criarObjetivos(objetivo).subscribe(
      (response) => {
        this.objetivosEstrategicos.push(objetivo);
        this.objetivoEstrategicoo = '';
      },
      (error) => {
        console.error('Erro ao criar objetivo:', error);
      }
    );
  }

  salvarObjetivoOperacional() {
    const operacionais: Objetivos = {
      tipoObjetivo: 'operacional',
      objetivo: this.objetivoOperacionalInput
    };

    this.objetivosEstrategicosService.criarObjetivosOperacionais(operacionais).subscribe(
      (response) => {
        this.objetivosOperacionais.push(operacionais);
        this.objetivoOperacionalInput = '';
      },
      (error) => {
        console.error('Erro ao criar objetivo:', error);
      }
    );
  }

}
