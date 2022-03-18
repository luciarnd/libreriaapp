import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './autor/autor.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { LibroComponent } from './libro/libro.component';

const routes: Routes = [
  {path: '', redirectTo: '/autor/all', pathMatch: 'full'},
  {path: 'autor/all', component: AutorComponent},
  {path: 'libro/all', component: LibroComponent},
  {path: 'categoria/all', component: CategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
