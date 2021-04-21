import { Pelicula } from './../../clases/pelicula';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaParaMostrar: Pelicula;

  constructor() { 
    this.peliculaParaMostrar=new Pelicula();
    /*
    this.peliculaParaMostrar.nombre="facundo";
    this.peliculaParaMostrar.tipo="facundo";
    this.peliculaParaMostrar.cantidadPublico=20;
    this.peliculaParaMostrar.fechaEstreno=new Date();*/
  }

  ngOnInit(): void {
  }

}
