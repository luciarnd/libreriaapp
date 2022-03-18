import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  public libros: Libro[] = [];

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.getLibros();
  }

  public getLibros(): void {
    this.libroService.getLibros().subscribe(
      (response: Libro[]) => {
        this.libros = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
