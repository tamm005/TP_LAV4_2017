import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { ArchivosjugadoresService } from '../../servicios/archivosjugadores.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';



@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class ListadosComponent implements OnInit {

  users : any;
  mostrar : boolean = true;
  motrarFilt : boolean = true;
  filtrado : any;
  aux : any;


  constructor(private archivo : ArchivosjugadoresService, private filtro : JugadoresService) { 
    this.listar();
    
  }

  listar()
  {
    this.archivo.httpGetPromise("usuarios.json")
    .then( data => { this.users = data; this.aux = data; })
    .catch( error => console.error(error) );
  
  }

  filtrar(modo : string)
  {
    this.filtro.filtrar("usuarios.json",modo)
    .then(data => { this.filtrado = data})
    .catch(error=>console.error(error));
  }
  ngOnInit() {
    this.listar();   
  }

  filtTrue()
  {
    this.filtrar("gano"); 
    
    this.mostrar = true;
    if(this.motrarFilt == false)
    {
      this.motrarFilt = true;
    }  
    else
    {
      this.motrarFilt = false;
    }
    console.log(this.filtrado);
  }

  filtFalse()
  {
    this.filtrar("perdio"); 
    
    this.mostrar = true;
    if(this.motrarFilt == false)
    {
      this.motrarFilt = true;
    }  
    else
    {
      this.motrarFilt = false;
    }  
    console.log(this.filtrado);
  }

  Show()
  {
    this.filtrar("todos"); 
    
    this.mostrar = true;
    if(this.motrarFilt == false)
    {
      this.motrarFilt = true;
    }  
    else
    {
      this.motrarFilt = false;
    }  
    
  }

  

  
  settings = {
    columns: {
      usuario: {
        title: 'usuario'
      },
      email: {
        title: 'email'
      },
      fecha: {
        title: 'fecha'
      },
      puntaje: {
        title: 'puntaje'
      },
      gano: {
        title: 'gano'
      }
    }
  };
  
 
 // this.data = JSON.stringify(this.aux) ;

  //data = [{"cuit":91237256393,"usuario":"avolker0","email":"fdelamar0@wikipedia.org","puntaje":3466,"fecha":"12/03/2017","sexo":"M","gano":false},{"cuit":72838602215,"usuario":"edacres1","email":"sgreedyer1@cocolog-nifty.com","puntaje":9771,"fecha":"02/03/2017","sexo":"M","gano":false}];

  // data = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz"
  //   },
  //   {
  //     id: 2,
  //     name: "Ervin Howell",
  //     username: "Antonette",
  //     email: "Shanna@melissa.tv"
  //   },
  //   {
  //     id: 11,
  //     name: "Nicholas DuBuque",
  //     username: "Nicholas.Stanton",
  //     email: "Rey.Padberg@rosamond.biz"
  //   }
  // ];



}
