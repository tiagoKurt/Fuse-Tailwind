import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export type Consequencias = {
  id?:number;
  consequencia : string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsequenciaService {
  apiUrl = 'http://localhost:3000/consequencias'
  constructor(private http: HttpClient) { }

  pegarConsequencias(): Observable<Consequencias[]> {
    return this.http.get<Consequencias[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erro ao buscar os objetivos estratégicos:', error);
        return throwError(error);
      })
    );
  }

  criarConsequencias(consequencias : Consequencias){
    return this.http.post(this.apiUrl, consequencias);
  }

  deletarConsequencias(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
