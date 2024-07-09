import { Component} from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { IdentificacaoRiscoComponent } from './risco/identificacao-risco/identificacao-risco.component';
import { ConsequenciasComponent } from './risco/consequencias/consequencias.component';


@Component({
  selector: 'app-risco',
  standalone: true,
  imports: [MatTab,
    MatTabGroup,
    IdentificacaoRiscoComponent,
    ConsequenciasComponent
  ],
  templateUrl: './risco.component.html',
  styleUrls: ['./risco.component.scss']
})
export class RiscoComponent  {
  
}
