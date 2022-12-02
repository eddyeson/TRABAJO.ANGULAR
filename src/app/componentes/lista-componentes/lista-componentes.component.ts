import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';
import { Graficas } from 'src/app/components';
import { ServiciograficasService } from 'src/app/serviciograficas.service';

@Component({
  selector: 'app-lista-componentes',
  templateUrl: './lista-componentes.component.html',
  styleUrls: ['./lista-componentes.component.scss']
})
export class ListaComponentesComponent implements OnInit {
  graficas:Graficas[]=[];
  carrito: Map<string , number>;
  constructor(private servicegrafica: ServiciograficasService, protected servicecarrito:CarritoService){
    this.carrito = servicecarrito.getcarrito();
  }
ngOnInit():void{
    this.obtenergraficas();
}
obtenergraficas():void{
    this.servicegrafica.getgraficas().subscribe(graficas=>this.graficas=graficas);
    
}
comprar():void{
  this.servicegrafica.comprar(this.carrito, this.graficas);
  this.servicecarrito.limpiarcarrito();
  this.obtenergraficas();
}
agregaralcarrito(grafica: Graficas):void{
  this.servicecarrito.agregaralcarrito(grafica.nombre, grafica.stock);
}
}
