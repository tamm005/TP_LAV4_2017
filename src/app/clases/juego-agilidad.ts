import { Juego } from '../clases/juego';

export class JuegoAgilidad extends Juego {

    primer : number;
    operador : string;
    segundo : number;
    resultado: number;
    numeroIngresado: number;

    constructor() {
        super("Agilidad mental");
    }

    public generarOperacion() {
        this.primer = this.numeroAleatorio(1, 10);
        this.segundo = this.numeroAleatorio(1, 10);
        let aleatorio = this.numeroAleatorio(1, 2);
        switch(aleatorio) {
            case 1:
                this.operador = '+';
                this.resultado = this.primer + this.segundo;
                break;
            case 2:
                this.operador = '-';
                this.resultado = this.primer - this.segundo;
                break;
        }
    }

   public numeroAleatorio(min:number, max:number) {
        return Math.round(Math.random() * (max - min) + min);
    }
    
    public verificar() {
        this.gano = this.numeroIngresado == this.resultado;
        return this.numeroIngresado == this.resultado;
    }
}
