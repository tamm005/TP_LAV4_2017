export class JuegoPiedraPapelTijera {
    eleccionMaquina : string;
    eleccionHumano : string;
    ContadorDeEmpates : number =0;
    ContadorDeGanadas : number =0;
    ContadorDePerdidas : number =0; 
    numeroSecreto : number;

    constructor(){}

    public comenzar()
    {
        this.numeroSecreto =Math.floor( Math.random()*3)+1;//RANDOM entre 1 y 3
        //alert(numeroSecreto);
        switch(this.numeroSecreto)
        {
            case 1:
            this.eleccionMaquina="piedra";
                break;
            case 2:
            this.eleccionMaquina="papel";
                break;
            case 3:
            this.eleccionMaquina="tijera";
                break;
        }
        //alert(eleccionMaquina);
    }//end funcion comenzar

    public piedra()
    {
        alert("La máquina eligió: " + this.eleccionMaquina);
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
    }//end funcion tijera

    public mostarResultado(){
        /* Mostrar
        document.getElementById('empatadas').value=ContadorDeEmpates + " partidas empatadas.";
        document.getElementById('perdidas').value=ContadorDePerdidas + " partidas perdidas.";
        document.getElementById('ganadas').value=ContadorDeGanadas + " partidas ganadas."; 
         */
        this.comenzar();
    }

}
