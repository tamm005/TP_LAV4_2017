
import { Component, OnInit , Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()
 listado: Array<any>;


  constructor() {
    console.info(this.listado + "app-listado-de-resultados");
   }

  ngOnInit() {

  }

  ver() {
    console.info(this.listado);
  }

}
