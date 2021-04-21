
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaPeliculasComponent } from './busqueda-peliculas/busqueda-peliculas.component';
import { BienvenidosComponent } from './bienvenidos/bienvenidos.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './pages/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaPeliculasComponent,
    BienvenidosComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaPeliculaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
