import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;

 
  arrayUsuarios : Array<any> = new Array<any>();

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(private route: ActivatedRoute, private router: Router) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";

      this.arrayUsuarios = JSON.parse(localStorage.getItem("Usuarios"));
      console.log(this.arrayUsuarios);
  }

  ngOnInit() {
  }

  Entrar() {
    let user= JSON.parse(localStorage.getItem("usuario"));
    console.log(user);
    if(user != null){
      if (this.usuario === user.email && this.clave === user.pass) {
        console.log("entro");
        
        this.router.navigate(['/Juegos']);
      }
      else{
        
        var x = document.getElementById("usuario");
        
       this.router.navigate(['/Login']);
      }
    }
    else
    var x = document.getElementById("usuario");
    alert("Primero debe registrarse");
    this.progreso=0;
    this.ProgresoDeAncho="0%";
    this.usuario = '';
    this.clave= '';
    this.router.navigate(['/Registro']);
  }



  MoverBarraDeProgreso() {  
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
     // console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
        case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
        // case 75:
        //   this.clase="progress-bar progress-bar-success progress-bar-striped active";
        //   this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
        //   break;
        case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  }

}
