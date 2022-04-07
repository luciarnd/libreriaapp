import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
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

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
