import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor';
import { AutorService } from '../services/autor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  public autors: Autor[] = [];
  
  constructor(private autorService: AutorService) { }

  ngOnInit(): void {
    this.getAutors();
  }

  public getAutors(): void {
    this.autorService.getAutores().subscribe(
      (response: Autor[]) => {
        this.autors = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
