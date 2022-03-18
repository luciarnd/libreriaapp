import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Libro } from "../models/libro";

@Injectable ({
    providedIn: 'root'
})


export class LibroService {
    
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {

    }

    public getLibros(): Observable<Libro[]> {
        return this.http.get<Libro[]>(`${this.apiServerUrl}/libro/all`)
    }

    public getLibroById(libroid: number): Observable<Libro> {
        return this.http.get<Libro>(`${this.apiServerUrl}/libro/${libroid}`)
    }

    public getLibroByAutorDni(autordni: string): Observable<Libro[]> {
        return this.http.get<Libro[]>(`${this.apiServerUrl}/libro/autor/${autordni}`)
    }

    public getLibroByCategoriaId(categoriaid: number): Observable<Libro[]> {
        return this.http.get<Libro[]>(`${this.apiServerUrl}/libro/categoria/${categoriaid}`)
    }

    public addLibro(libro: Libro): Observable<Libro> {
        return this.http.post<Libro>(`${this.apiServerUrl}/libro/add`, libro);
    }

    public updateLibro(libro: Libro, libroid: number): Observable<Libro> {
        return this.http.put<Libro>(`${this.apiServerUrl}/libro/editar/${libroid}`, libro)
    }

    public deleteLibro(libroid: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/libro/delete/${libroid}`)
    }
}