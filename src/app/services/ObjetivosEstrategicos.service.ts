import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export type objetivosEstrategi = {
  id?: number;
  objetivoEstrategico: string;
}; 
export type objetivosOperacio = {
  id?: number;
  objetivoOperacional: string;
}; 

@Injectable({
  providedIn: 'root'
})
export class ObjetivosEstrategicosService {
  apiUrl = 'http://localhost:3000/teste';
  apiUrlOperacionais = 'http://localhost:3000/objetivosOperacionais'
  constructor(private http: HttpClient) { }

  pegarObjetivos(): Observable<objetivosEstrategi[]> {
    return this.http.get<objetivosEstrategi[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erro ao buscar os objetivos estratégicos:', error);
        return throwError(error);
      })
    );
  }

  pegarOperacionais(): Observable<objetivosOperacio[]> {
    return this.http.get<objetivosOperacio[]>(this.apiUrlOperacionais).pipe(
      catchError(error => {
        console.error('Erro ao buscar os operacionais:', error);
        return throwError(error);
      })
    );
  }

  criarObjetivos(objetivos : objetivosEstrategi){
    return this.http.post(this.apiUrl, objetivos);
  }
  criarObjetivosOperacionais(operacionais : objetivosOperacio){
    return this.http.post(this.apiUrlOperacionais, operacionais);
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
