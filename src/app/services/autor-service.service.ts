import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Autor } from '../models/autor';


@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
   }

   public findAll(): Observable<Autor[]>{
     return this.http.get<Autor[]>(`${this.apiBaseUrl}/autor/all`);
   }
   public findById(dni: string): Observable<Autor>{
      return this.http.get<Autor>(`${this.apiBaseUrl}/autor/getById/${dni}`)
   }
   public updateAutor(autor: Autor): Observable<Autor>{
     return this.http.put<Autor>(`${this.apiBaseUrl}/autor/update`, autor)
   }
   public addAutor(autor: Autor): Observable<Autor>{
     return this.http.post<Autor>(`${this.apiBaseUrl}/autor/add`, autor)
   }
   public deleteAutor(dni: string): Observable<Autor>{
     return this.http.delete<Autor>(`${this.apiBaseUrl}/autor/delete/${dni}`)
   }
}
