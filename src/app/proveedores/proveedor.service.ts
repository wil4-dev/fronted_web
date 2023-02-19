import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proveedor } from './proveedor';
import { PROVEEDORES } from './proveedor.json';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }

// GET
getProveedores() : Observable<Proveedor[]> {
  return of(PROVEEDORES);  
}

}

