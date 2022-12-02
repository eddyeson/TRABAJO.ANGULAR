import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './componentes/compra/compra.component';
import { ListaComponentesComponent } from './componentes/lista-componentes/lista-componentes.component';

const routes: Routes = [
  {
    path:'catalogo',
    component: ListaComponentesComponent,
    pathMatch: 'full'
  },
  {
    path:'comprar',
    component:CompraComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
