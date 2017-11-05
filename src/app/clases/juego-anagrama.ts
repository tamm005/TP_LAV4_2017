import  { Juego } from '../clases/juego';

export class JuegoAnagrama extends Juego {
   

    constructor(nombre?: string, gano?: boolean,jugador?:string){
        super(" Anagrama ",gano,jugador);
        }

  

    public verificar() {
      
        if (this.gano) {
          return true;
        } else {
          return false;
        }
    }

}

