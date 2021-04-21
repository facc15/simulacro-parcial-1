import { AngularFireStorage } from '@angular/fire/storage';
import { Pelicula } from './../../clases/pelicula';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

  muestroCrear:boolean=false;
  peliculaNueva!: Pelicula;
  @Output()creacionNuevaPeliculaEvento:EventEmitter<any> = new EventEmitter<any>();

  constructor(private storage:AngularFireStorage) { }

  ngOnInit(): void {
  }

  guardarNuevaPelicula()
  {

    /*recuperar solo el nombre del path.(sin ruta)
    var filename = this.peliculaNueva.fotoPelicula.replace(/^.*\\/, "");
    this.peliculaNueva.fotoPelicula=filename;
    */
    this.creacionNuevaPeliculaEvento.emit(this.peliculaNueva);
  }

  hacerNuevaPelicula()
  {
    this.muestroCrear=!this.muestroCrear;
    this.peliculaNueva=new Pelicula();
  }

}
