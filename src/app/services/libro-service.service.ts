import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
   }
   public findAll(): Observable<Libro[]>{
    return this.http.get<Libro[]>(`${this.apiBaseUrl}/libro/all`);
  }
  public findById(id: number): Observable<Libro>{
     return this.http.get<Libro>(`${this.apiBaseUrl}/libro/getById/${id}`)
  }
  public updateLibro(libro: Libro): Observable<Libro>{
    return this.http.put<Libro>(`${this.apiBaseUrl}/libro/update`, libro)
  }
  public addLibro(libro: Libro): Observable<Libro>{
    return this.http.post<Libro>(`${this.apiBaseUrl}/libro/add`, libro)
  }
  public deleteLibro(id: number): Observable<Libro>{
    return this.http.delete<Libro>(`${this.apiBaseUrl}/libro/delete/${id}`)
  }
}
