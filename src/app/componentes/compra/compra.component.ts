import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';
import { Graficas } from 'src/app/components';
import { ServiciograficasService } from 'src/app/serviciograficas.service';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
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
comprar():void{
  this.servicegrafica.comprar(this.carrito, this.graficas);
  this.servicecarrito.limpiarcarrito();
  this.obtenergraficas();
}
agregaralcarrito(grafica: Graficas):void{
  this.servicecarrito.agregaralcarrito(grafica.nombre, grafica.stock);
}

}
