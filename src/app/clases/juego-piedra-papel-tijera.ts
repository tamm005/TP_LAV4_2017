import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends Juego {
    eleccionMaquina : string;
    eleccionHumano : string;
    ContadorDeEmpates : number =0;
    ContadorDeGanadas : number =0;
    ContadorDePerdidas : number =0; 
    numeroSecreto : number = null;

    constructor(nombre?: string, gano?: boolean,jugador?:string){
        super("Piedra Papel o Tijera",gano,jugador);
        this.comenzar();
    }

    public comenzar()
    {
        this.numeroSecreto =Math.floor( Math.random()*3)+1;//RANDOM entre 1 y 3
        // alert(this.numeroSecreto+ ' secreto'); 

        switch(this.numeroSecreto)
        {
            case 1:
                // alert(this.numeroSecreto);
                this.eleccionMaquina = 'piedra';
                break;
            case 2:
                this.eleccionMaquina= 'papel';
                break;
            case 3:
                this.eleccionMaquina= 'tijera';
                break;
        }
    }//end funcion comenzar

    public piedra()
    {
        alert(" La máquina eligió: " + this.eleccionMaquina);
        this.eleccionHumano = "piedra";
        if(this.eleccionHumano == this.eleccionMaquina)
        {
            alert("Empate.");	
            this.ContadorDeEmpates++;	
        }
        else if(this.eleccionMaquina == "tijera")
        {
            alert("Ganaste!");
            this.ContadorDeGanadas++;
        }
        else
        {
            alert("Ganó la Máquina!");
            this.ContadorDePerdidas++;
        }
    this.mostarResultado();
    this.comenzar();
    }//end funcion piedra

    public papel()
    {
        alert("La máquina eligió: " + this.eleccionMaquina);
        this.eleccionHumano = "papel";
        if(this.eleccionHumano == this.eleccionMaquina)
        {
            alert("Empate.");
            this.ContadorDeEmpates++;		
        }
        else if(this.eleccionMaquina == "piedra")
        {
            alert("Ganaste.");
            this.ContadorDeGanadas++;
        }
        else
        {
            alert("Ganó la Máquina.");
            this.ContadorDePerdidas++;
        }
    this.mostarResultado();
    this.comenzar();
    }//end funcion  papel

    tijera()
    {
        alert("La máquina eligió: " +this.eleccionMaquina);
        this.eleccionHumano = "tijera";
        if(this.eleccionHumano == this.eleccionMaquina)
        {
            alert("Empate. ");
            this.ContadorDeEmpates++;		
        }
        else if(this.eleccionMaquina == "papel")
        {
            alert("Ganaste. ");
            this.ContadorDeGanadas++;
        }
        else
        {
            alert("Ganó la Máquina.");
            this.ContadorDePerdidas++;
        }
    this.mostarResultado();
    this.comenzar();
    }//end funcion tijera

    public mostarResultado(){
        alert( 'Ganados: ' + this.ContadorDeGanadas + '\n Perdidos:' + this.ContadorDePerdidas +
                '\n Empatados: ' + this.ContadorDeEmpates );
    }

    public verificar(){
        if(this.gano){
            alert("gano");
            return true;
        }
        else{
            alert("perdió");
            return false;
        }
        
    }

}
