import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { ObjetivosEstrategicosService, objetivosEstrategi, objetivosOperacio} from 'app/services/ObjetivosEstrategicos.service';

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
    MatListModule,],
  templateUrl: './identificacao-risco.component.html',
  styleUrl: './identificacao-risco.component.scss'
})
export class IdentificacaoRiscoComponent {
  objetivosEstrategicos: objetivosEstrategi[] = [];
  objetivosOperacionaiss : objetivosOperacio[] = [];
  errorMessage: string = '';
  errorMessage2 : string = '';
  objetivoEstrategicoo : string = '';
  objetivoOperacionalInput : string = '';

  constructor(private objetivosEstrategicosService: ObjetivosEstrategicosService) { }

  ngOnInit(): void {
    this.objetivosEstrategicosService.pegarObjetivos().subscribe(
      (data: objetivosEstrategi[]) => {
        this.objetivosEstrategicos = data;
      },
      (error) => {
        this.errorMessage = 'Ainda não possui objetivos estratégicos cadastrados!';
        console.error('Erro ao carregar os objetivos estratégicos:', error);
      }
    );

    this.objetivosEstrategicosService.pegarOperacionais().subscribe(
      (data: objetivosOperacio[]) => {
        this.objetivosOperacionaiss = data;
      },
      (error) => {
        this.errorMessage2 = 'Ainda não possui objetivos operacionais cadastrados!';
        console.error('Erro ao carregar os objetivos estratégicos:', error);
      }
    );


  }

  salvarObjetivo() {
    const objetivo: objetivosEstrategi = {
      objetivoEstrategico : this.objetivoEstrategicoo
    };

    this.objetivosEstrategicosService.criarObjetivos(objetivo).subscribe(
      (response) => {

      },
      (error) => {
        console.error('Erro ao criar objetivo:', error);
      }
    );
  }

  salvarObjetivoOperacional() {
    const operacionais: objetivosOperacio = {
      objetivoOperacional : this.objetivoOperacionalInput
    };

    this.objetivosEstrategicosService.criarObjetivosOperacionais(operacionais).subscribe(
      (response) => {

      },
      (error) => {
        console.error('Erro ao criar objetivo:', error);
      }
    );
  }

}
