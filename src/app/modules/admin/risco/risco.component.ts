import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivosEstrategicosService,  objetivosEstrategi} from 'app/services/ObjetivosEstrategicos.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-risco',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FuseHighlightComponent,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  templateUrl: './risco.component.html',
  styleUrls: ['./risco.component.scss']
})
export class RiscoComponent implements OnInit {
  objetivosEstrategicos: objetivosEstrategi[] = [];
  errorMessage: string = '';

  constructor(private objetivosEstrategicosService: ObjetivosEstrategicosService) { }

  ngOnInit(): void {
    this.objetivosEstrategicosService.pegarObjetivos().subscribe(
      (data: objetivosEstrategi[]) => {
        this.objetivosEstrategicos = data;
      },
      (error) => {
        this.errorMessage = 'Erro ao carregar os objetivos estratégicos.';
        console.error('Erro ao carregar os objetivos estratégicos:', error);
      }
    );
  }
}
