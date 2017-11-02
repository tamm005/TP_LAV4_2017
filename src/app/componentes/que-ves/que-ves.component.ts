import { Component, OnInit } from '@angular/core';
import { JuegoQueVes } from '../../clases/juego-que-ves';

@Component({
  selector: 'app-que-ves',
  templateUrl: './que-ves.component.html',
  styleUrls: ['./que-ves.component.css']
})
export class QueVesComponent implements OnInit {
  mostrarJuego : boolean;
  nuevoJuego : JuegoQueVes;
  miImagen : any;
  respuestaIngresada : string;
  constructor() {
    this.nuevoJuego = new JuegoQueVes();//ya puedo mostrar el nombre
    this.mostrarJuego = false;
    console.info("Inicio Que Ves");
    this.miImagen = '1';
  }

  ComenzarJuego(){
    this.nuevoJuego.comenzar();
    this.mostrarJuego = !this.mostrarJuego;
    this.miImagen = this.nuevoJuego.imgMostrar;
    this.nuevoJuego.respuesta;
    //this.miImagen.jugar();
  }

  verificar(){
    this.nuevoJuego.verificar();
  }

  asignarImagen(){
    //llama a la funcion que va a cargar la img desde la clase JuegoQueVes
    this.miImagen.comenzar();//'';//lo que me retorne
  }

  ngOnInit() {
  }

}
