import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
    url="http://localhost:8080/";
    
    constructor(private http: HttpClient) { }
    
    public verUsuarios(): Observable<usuario>{
       return this.http.get<usuario>(this.url+ 'ver/usuarios');
    }
  }