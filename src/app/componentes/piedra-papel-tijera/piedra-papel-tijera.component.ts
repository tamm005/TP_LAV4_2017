import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  eleccionUser : string;
  empezar : JuegoPiedraPapelTijera;
  nuevoJuego : JuegoPiedraPapelTijera;
  constructor() {
    this.empezar = new JuegoPiedraPapelTijera();
    this.nuevoJuego = new JuegoPiedraPapelTijera();
  }
  
 

  elijePiedra(){
    this.empezar.comenzar();
    alert("yo elegí piedra ");
    this.nuevoJuego.piedra();
  }

  elijePapel(){
    this.empezar.comenzar();
    alert("yo elegí papel ");
    this.nuevoJuego.papel();
  }

  elijeTijera(){
    this.empezar.comenzar();
    alert("yo elegí tijera ");
    this.nuevoJuego.tijera();
  }

  ngOnInit() {
   // this.empezar.comenzar();
  }

}
