import { ServiceImageService } from './services/service-image.service';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularRouting';
  opcion:boolean=false;
  valor:boolean=true;

  constructor(private router:Router, private serviceImageService: ServiceImageService){}
    public onLoadAdmin(){
      this.opcion = confirm("¿Eres el administrador?");
      if (this.opcion == true){
        this.router.navigate(['admin']);
      }else{
        this.router.navigate(['home']);
      }
    }
    peliculas(){
      this.valor=false;
      this.serviceImageService.setValor(this.valor);
      this.router.navigate(['imagenes/peliculas']);
    }
    diferencias(){
      this.valor=false;
      this.serviceImageService.setValor(this.valor);
      this.router.navigate(['imagenes/diferencias']);
    }
}
