import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componentes/app.component';
import { CompraComponent } from './componentes/compra/compra.component';
import { ListaComponentesComponent } from './componentes/lista-componentes/lista-componentes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavComponent } from './componentes/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    ListaComponentesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
