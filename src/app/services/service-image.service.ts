import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceImageService {

  valor:boolean;

  constructor() {
    this.valor=false;
   }

  setValor(valor:boolean){
    this.valor = valor;
  }
}
