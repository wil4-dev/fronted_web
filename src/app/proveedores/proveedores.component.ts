import { Component } from '@angular/core';
import { Proveedor } from './proveedor';
import { ProveedorService } from './proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  titulo = "Proveedores";
  proveedores:Proveedor[];

  constructor(private proveedorService:ProveedorService){
    this.proveedorService.getProveedores().subscribe(
      p => this.proveedores = p
    );
  }
}
