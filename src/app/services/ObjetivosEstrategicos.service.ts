import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export type Objetivos = {
  id?: number;
  tipoObjetivo : string;
  objetivo : string;
}; 

@Injectable({
  providedIn: 'root'
})
export class ObjetivosEstrategicosService {
  apiUrl = 'http://localhost:3000/teste';
  constructor(private http: HttpClient) { }

  pegarObjetivos(): Observable<Objetivos[]> {
    return this.http.get<Objetivos[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erro ao buscar os objetivos estratégicos:', error);
        return throwError(error);
      })
    );
  }

  pegarOperacionais(): Observable<Objetivos[]> {
    return this.http.get<Objetivos[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erro ao buscar os operacionais:', error);
        return throwError(error);
      })
    );
  }

  criarObjetivos(objetivos : Objetivos){
    return this.http.post(this.apiUrl, objetivos);
  }
  
  criarObjetivosOperacionais(operacionais : Objetivos){
    return this.http.post(this.apiUrl, operacionais);
  }

  deletarObjetivos(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
