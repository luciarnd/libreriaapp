
import { Autor } from "./autor";
import { Categoria } from "./categoria";

export interface Libro {
    id: number,
    titulo: string,
    edicion: number,
    IdAutor: Autor,
    IdCategoria: Categoria
}