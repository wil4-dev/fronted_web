import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera aplicación en Angular';
  curso:String = "TDS N4A";
  profesor:String = "Ing. Carmen Tacuri";
}
