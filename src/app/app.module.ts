import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JuegodadosComponent } from './components/juegodados/juegodados.component';
import { HomeComponent } from './components/home/home.component';
import { AdivinaNumeroComponent } from './components/adivina-numero/adivina-numero.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContadorComponent } from './components/contador/contador.component';
import { DadoComponent } from './components/dado/dado.component';
import { DiferenciasComponent } from './components/diferencias/diferencias.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegodadosComponent,
    HomeComponent,
    AdivinaNumeroComponent,
    AdminComponent,
    ContadorComponent,
    DadoComponent,
    DiferenciasComponent,
    ImagenesComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
