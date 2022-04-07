import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Autor } from '../../models/autor';
import { AutorService } from '../../services/autor-service.service';
import { NgForm } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AutorListComponent implements OnInit {
  numfilas = [];
  autors: Autor[];
  editAutor: Autor;
  deleteAutor: Autor;
  page: number = 1;
  constructor(private autorService: AutorService) {
   }

  ngOnInit(): void {
    this.autorService.findAll().subscribe(data => {
      this.autors = data;
    });
  }

  public onUpdateAutor(autor: Autor): void {
  
    this.autorService.updateAutor(autor).subscribe(
      (response: Autor) => {
        console.log(response);
        this.autorService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  public onDeleteAutor(autordni: string): void {
    this.autorService.deleteAutor(autordni).subscribe(
      (response: Autor) => {
        console.log(response);
        this.autorService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  public onAddAutor(addForm: NgForm): void {
    document.getElementById('add-autor-form')?.click();
  
    this.autorService.addAutor(addForm.value).subscribe(
      (response: Autor) => {
        console.log(response);
        this.autorService.findAll();
        addForm.reset();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
    );
  }


  public onOpenModal(autor: Autor, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal'); 

    if (mode === 'add') {
      button.setAttribute('data-target', '#addAutorModal');
    }

    if (mode === 'edit') {
      this.editAutor = autor;
      button.setAttribute('data-target', '#updateAutorModal');
    }

    if (mode === 'delete') {
      this.deleteAutor = autor;
      button.setAttribute('data-target', '#deleteAutorModal');
    }
    container!.appendChild(button);
    button.click();

  }
}
