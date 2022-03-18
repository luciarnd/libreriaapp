import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Categoria } from "../models/categoria";

@Injectable ({
    providedIn: 'root'
})


export class CategoriaService {
    
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {

    }

    public getCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(`${this.apiServerUrl}/categoria/all`)
    }

    public getCategoriaById(categoriaid: number): Observable<Categoria> {
        return this.http.get<Categoria>(`${this.apiServerUrl}/categoria/${categoriaid}`)
    }

    public addCategoria(categoria: Categoria): Observable<Categoria> {
        return this.http.post<Categoria>(`${this.apiServerUrl}/categoria/add`, categoria);
    }

    public updateCategoria(categoria: Categoria, categoriaid: number): Observable<Categoria> {
        return this.http.put<Categoria>(`${this.apiServerUrl}/categoria/editar/${categoriaid}`, categoria)
    }

    public deleteCategoria(categoriaid: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/categoria/delete/${categoriaid}`)
    }
}