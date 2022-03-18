import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorService } from './services/autor.service';
import { CategoriaService } from './services/categoria.service';
import { LibroService } from './services/libro.service';
import { AutorComponent } from './autor/autor.component';
import { LibroComponent } from './libro/libro.component';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    AutorComponent,
    LibroComponent,
    CategoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AutorService,
    LibroService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
