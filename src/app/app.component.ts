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

  constructor(private router:Router){}
    public onLoadAdmin(){
      this.opcion = confirm("¿Eres el administrador?");
      if (this.opcion == true){
        this.router.navigate(['admin']);
      }else{
        this.router.navigate(['home']);
      }
    }
  
}
