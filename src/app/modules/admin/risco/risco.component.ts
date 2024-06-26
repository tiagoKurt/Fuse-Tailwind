import { Component} from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { IdentificacaoRiscoComponent } from './risco/identificacao-risco/identificacao-risco.component';


@Component({
  selector: 'app-risco',
  standalone: true,
  imports: [MatTab,
    MatTabGroup,
    IdentificacaoRiscoComponent
  ],
  templateUrl: './risco.component.html',
  styleUrls: ['./risco.component.scss']
})
export class RiscoComponent  {
  
}
