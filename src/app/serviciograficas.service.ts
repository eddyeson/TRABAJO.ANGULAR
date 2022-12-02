import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Graficas } from './components';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciograficasService {
  url:string='https://62bd2d54bac21839b6fda975.mockapi.io/graficas';//mockapi
  constructor( private http: HttpClient) {}
  
  public getgraficas():Observable<Graficas[]>{
    return this.http.get<Graficas[]>(this.url);
  }
  
  public comprar(carrito:Map<string, number>, data:Graficas[]):Observable<Graficas[]>| undefined{
    let body: Graficas[] = [];
    for (const compra of carrito) {
      for (const item of data) {
        if(compra[0] == item.nombre){
          body.push({
            nombre: item.nombre,
            price: item.price,
            ram: item.ram,
            stock: item.stock - compra[1],
            clearence: item.clearence
          });
        }
      }
    }
    return this.http.put<Graficas[]>(this.url, body);
  }
}
