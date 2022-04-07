import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria } from '../../models/categoria';
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro-service.service';
import { CategoriaService } from '../../services/categoria-service.service';
import { Autor } from '../../models/autor';
import { AutorService } from '../../services/autor-service.service';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

  libros: Libro[];
  categorias: Categoria[]
  autores: Autor[];
  autors: any[] = [];
  categoris: any[] = [];
  editLibro: Libro;
  deleteLibro: Libro;
  page: number = 1;
  constructor(private libroService: LibroService, private categoriaService: CategoriaService, private autorService: AutorService) {
    this.getAutores();
    this.getCategorias();
   }

  ngOnInit(): void {
    this.libroService.findAll().subscribe(data => {
      this.libros = data;
    });

    this.categoriaService.findAll().subscribe(data => {
      this.categorias = data;
    });

    this.autorService.findAll().subscribe(data => {
      this.autores = data;
    });
  }


  public search(key: string): void {
    console.log(key);
    const res: Libro[] = [];
    for (const libro of this.libros) {
      if (libro.autor.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        libro.categoria.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        res.push(libro);
      }
    }
    this.libros = res;
    if (res.length === 0 || !key) {
      this.libroService.findAll();
      this.ngOnInit();
    }

  }


  public onUpdateLibro(libro: Libro): void {

    this.libroService.updateLibro(libro).subscribe(
      (response: Libro) => {
        console.log(response);
        this.libroService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteLibro(libroid: number): void {
    this.libroService.deleteLibro(libroid).subscribe(
      (response: Libro) => {
        console.log(response);
        this.libroService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddLibro(addForm: NgForm): void {
    document.getElementById('add-libro-form')?.click();

    this.libroService.addLibro(addForm.value).subscribe(
      (response: Libro) => {
        console.log(response);
        this.libroService.findAll();
        addForm.reset();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onOpenModal(libro: Libro, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addLibroModal');
    }

    if (mode === 'edit') {
      this.editLibro = libro;
      button.setAttribute('data-target', '#updateLibroModal');
    }

    if (mode === 'delete') {
      this.deleteLibro = libro;
      button.setAttribute('data-target', '#deleteLibroModal');
    }
    container!.appendChild(button);
    button.click();

  }

  getAutores(): void {
    this.autorService.findAll().subscribe(autores => {
      autores.forEach(autor => {
        this.autors.push(
          {
            text: autor.nombre + " " + autor.apellido1,
            value:  autor.nombre + " " + autor.apellido1
          }
        )
      },
        this.autores = autores
      )
    }
    )
  }

  getCategorias(): void {
    this.categoriaService.findAll().subscribe(categorias => {
      categorias.forEach(categoria => {
        this.categoris.push (
          {
            text: categoria.descripcion,
            value: categoria.descripcion
          }
        )},
        this.categorias = categorias
        )}
      )
  }
}
