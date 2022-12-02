import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import {  Graficas } from '../components';
import { ServiciograficasService } from '../serviciograficas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'componentesDePc';
  graficas:Graficas[]=[];
  carrito: Map<string, number>;
  constructor(private servicegrafica: ServiciograficasService, private servicecarrito:CarritoService){
    this.carrito = servicecarrito.getcarrito();  
  }
ngOnInit():void{
    this.obtenergraficas();
}

obtenergraficas():void{
    this.servicegrafica.getgraficas().subscribe(graficas=>this.graficas=graficas);
    
}

}