import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {
  listaCurso:String[] = ['TypeScript','JavaScript','Java SE','C#','PHP'];
  listaTemasTS:String[] = ['El manual de TS','Los básicos','Tipos de objetos'];
  listaTemasJS:String[] = ['Comprendiendo los frameworks JS del lado del cliente','Estructuras de datos en JS'];
  listaTemasC:String[] = ['Creación de un proyecto','Errores Sintácticos y Lógicos'];

  habilitar:boolean = true;
  titulo = "Directivas";

  // cambia el valor cada que se pulsa el boton
  setHabilitar(){
    this.habilitar = (this.habilitar==true) ? false : true;
  }

}
