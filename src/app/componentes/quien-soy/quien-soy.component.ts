import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  IrAMiJuego(){
    // let user= JSON.parse(localStorage.getItem("usuario"));
    // if(user != null){
      this.router.navigate(['/Juegos/QueVes']);
    // }else{
    //   this.router.navigate(['/Login']);
    // }
  }
  ngOnInit() {
  }

}
