import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Graficas } from './components';
import { map, Observable } from 'rxjs';
import { ServiciograficasService } from './serviciograficas.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  url:string='https://62bd2d54bac21839b6fda975.mockapi.io/pedidos';
  carrito= new Map<string, number>();
  constructor(private servicegrafica: ServiciograficasService, private http:HttpClient) { }

  public agregaralcarrito(grafica: string, stock: number){
    if(this.carrito.has(grafica)){
        let aux = this.carrito.get(grafica);
        if(aux != undefined){
          aux += 1;
        }
        if(aux != undefined && aux <= stock){
          this.carrito.set(grafica, aux as number);
        }
    }
    else {
      this.carrito.set(grafica, 1);
    }
  }

  public getcarrito():Map<string, number>{
    return this.carrito;
  }

  public limpiarcarrito():void{
    this.carrito = new Map<string, number>();
  }
}

