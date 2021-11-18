import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IUsuario } from '../interfaz/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = "http://localhost:3000/usuario";
  private cliente: HttpClient;

  constructor(moduloHttp: HttpClient) { 
    this.cliente = moduloHttp;
  }

  public ListarUsuarios(): Observable<Array<IUsuario>>{
    return this.cliente.get<Array<IUsuario>>(this.url);

  }

}
