import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  perf?:any;
  str:string = 'http://localhost:8080/produto/produtos';
  lista = [];
  constructor(private cliente:HttpClient) {}
  
  chama():Observable<any>{
    //console.log(this.cliente.get(this.str));
    return this.cliente.get(this.str);
    //new Observable();console.log(this.lista.length);
  }
}
