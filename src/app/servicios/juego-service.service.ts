// import { Injectable } from '@angular/core';
// import { Juego } from '../clases/juego';
// import { JuegoAdivina } from '../clases/juego-adivina';
// import { JuegoAgilidad } from '../clases/juego-agilidad';
// import { JuegoAnagrama } from '../clases/juego-anagrama';
// import { JuegoPiedraPapelTijera } from '../clases/juego-piedra-papel-tijera';
// import { JuegoQueVes } from '../clases/juego-que-ves';


// @Injectable()
// export class JuegoServiceService {

//   constructor() { }

//   public listar(): Array<Juego> {

//     let jugador = JSON.parse(localStorage.getItem("usuario"));
//     let miArray: Array<Juego> = new Array<Juego>();

//     miArray.push(new JuegoAdivina("Juego 1", false));
//     miArray.push(new JuegoAdivina("Pepe", true));
//     miArray.push(new JuegoAgilidad("Juego 3", false));
//     miArray.push(new JuegoPiedraPapelTijera("Juego 4", false));
//     miArray.push(new JuegoPiedraPapelTijera("Juego 5", false));
//     miArray.push(new JuegoAdivina("Juego 6", false));
//     return miArray;
//   }

//   public listarPromesa(): Promise<Array<Juego>> {
//     let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
//       let miArray: Array<Juego> = new Array<Juego>();
//       let jugador = JSON.parse(localStorage.getItem("usuario"));

//       miArray.push(new JuegoAdivina("JuegoPromesa 1", false,"promesa"));
//       miArray.push(new JuegoAdivina("PepePromesa", true));
//       miArray.push(new JuegoAgilidad("JuegoPromesa 3", false));
//       miArray.push(new JuegoQueVes("JuegoPromesa 4", false, jugador.email));
//       miArray.push(new JuegoAdivina("JuegoPromesa 5", false, jugador.email));
//       miArray.push(new JuegoAdivina("JuegoPromesa 6", false, jugador.email));
//       console.log(jugador);
//       resolve(miArray);
//     });

//     return promesa;
//   }

// }


import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { JuegoAdivina } from '../clases/juego-adivina';
@Injectable()
export class JuegoServiceService {

  constructor() { }

  public listar(): Array<Juego> {

    let miArray: Array<Juego> = new Array<Juego>();

    miArray.push(new JuegoAdivina("Juego 1", false));
    miArray.push(new JuegoAdivina("Pepe", true));
    miArray.push(new JuegoAdivina("Juego 3", false));
    miArray.push(new JuegoAdivina("Juego 4", false));
    miArray.push(new JuegoAdivina("Juego 5", false));
    miArray.push(new JuegoAdivina("Juego 6", false));
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      miArray.push(new JuegoAdivina("JuegoPromesa 1", false,"promesa"));
      miArray.push(new JuegoAdivina("PepePromesa", true));
      miArray.push(new JuegoAdivina("JuegoPromesa 3", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 4", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 5", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 6", false));
      resolve(miArray);
    });

    return promesa;
  }

}
