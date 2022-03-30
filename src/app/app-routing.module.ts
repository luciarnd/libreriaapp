import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorListComponent } from './componentes/autor-list/autor-list.component';
import { CategoriaListComponent } from './componentes/categoria-list/categoria-list.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LibroListComponent } from './componentes/libro-list/libro-list.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'autor/all', component: AutorListComponent},
  {path: 'categoria/all', component: CategoriaListComponent},
  {path: 'libro/all', component: LibroListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
