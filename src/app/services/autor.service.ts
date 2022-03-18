import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Autor } from "../models/autor";

@Injectable ({
    providedIn: 'root'
})


export class AutorService {
    
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {

    }

    public getAutores(): Observable<Autor[]> {
        return this.http.get<Autor[]>(`${this.apiServerUrl}/autor/all`)
    }

    public getAutorByDni(autorDni: string): Observable<Autor> {
        return this.http.get<Autor>(`${this.apiServerUrl}/autor/${autorDni}`)
    }

    public addAutor(autor: Autor): Observable<Autor> {
        return this.http.post<Autor>(`${this.apiServerUrl}/autor/add`, autor);
    }

    public updateAutor(autor: Autor, autorDni: string): Observable<Autor> {
        return this.http.put<Autor>(`${this.apiServerUrl}/autor/editar/${autorDni}`, autor)
    }

    public deleteAutor(autorDni: string): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/autor/delete/${autorDni}`)
    }
}