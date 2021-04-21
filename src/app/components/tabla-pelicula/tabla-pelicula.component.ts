import { Pelicula } from './../../clases/pelicula';
import { Component, OnInit , Input ,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

export class TablaPeliculaComponent implements OnInit {
  @Input() listadoPeliculas!:Pelicula[];

  @Output() peliculaSeleccionadaEvento: EventEmitter<any>=new EventEmitter<any>();

  constructor() { 

  }

  ngOnInit(): void {
  }

  seleccionarPelicula(pelicula:Pelicula)
  {
    console.log('Pelicula: '+pelicula);
    this.peliculaSeleccionadaEvento.emit(pelicula);

  }
}
