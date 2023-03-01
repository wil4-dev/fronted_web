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
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';

const RUTAS: Routes = [
  {path:'', redirectTo:'', pathMatch:'full'},
  {path:'clientes', component: ClientesComponent},
  {path:'clientes/form', component: FormComponent},
  {path:'clientes/form/:id', component: FormComponent},
  {path:'proveedores', component: ProveedoresComponent},
  {path:'directivas', component: DirectivaComponent}

];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, DirectivaComponent, ClientesComponent, ProveedoresComponent, FormComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(RUTAS)
  ],
  providers: [ClienteService, ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
