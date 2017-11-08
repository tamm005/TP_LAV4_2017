import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  nuevoJuego: JuegoAnagrama;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
  mensaje : string;


  constructor() {
    this.nuevoJuego = new JuegoAnagrama(); 
    this.ocultarVerificar=true;
   }

   generarPalabra() {
    this.nuevoJuego.asignarPalabra();
    this.contador=0;
    this.ocultarVerificar = false;
    this.nuevoJuego.gano = false;
    this.Mensajes = "";
  }

  verificar()
  {
    this.contador++;
    this.ocultarVerificar=true;
    if (this.nuevoJuego.verificar()){
      this.MostarMensaje("Sos un Genio!!!",true);
    }else{
      this.mensaje = "Ooops, casi lo lograste!";
      this.MostarMensaje(this.mensaje); 
    }
    console.info("Gano: ",this.nuevoJuego.gano);  
  }  

  MostarMensaje(mensaje:string,gano:boolean=false) {
    this.Mensajes = mensaje;    
    var x = document.getElementById("snackbar");
    if(gano)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }

    var modelo = this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  



  ngOnInit() {
  }
}
