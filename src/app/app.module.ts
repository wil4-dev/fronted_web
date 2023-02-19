import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedorService } from './proveedores/proveedor.service';

const RUTAS: Routes = [
  {path:'clientes', component: ClientesComponent},
  {path:'proveedores', component: ProveedoresComponent}
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, DirectivaComponent, ClientesComponent, ProveedoresComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(RUTAS)
  ],
  providers: [ClienteService, ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
