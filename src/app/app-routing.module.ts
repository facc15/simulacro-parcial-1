import { FormComponent } from './pages/form/form.component';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';
import { BusquedaPeliculasComponent } from './busqueda-peliculas/busqueda-peliculas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'busqueda-peliculas', component: BusquedaPeliculasComponent},
  {path: 'alta-pelicula', component: AltaPeliculaComponent},
  {path:'pages/form',component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }