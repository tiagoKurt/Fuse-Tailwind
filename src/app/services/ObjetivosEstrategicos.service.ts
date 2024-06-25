import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export type objetivosEstrategi = {
  id: number;
  objetivoEstrategico: string;
};

@Injectable({
  providedIn: 'root'
})
export class ObjetivosEstrategicosService {
  apiUrl = 'http://localhost:3000/ObjetivosEstrategicos';

  constructor(private http: HttpClient) { }

  pegarObjetivos(): Observable<objetivosEstrategi[]> {
    return this.http.get<objetivosEstrategi[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erro ao buscar os objetivos estratégicos:', error);
        return throwError(error);
      })
    );
  }
}
