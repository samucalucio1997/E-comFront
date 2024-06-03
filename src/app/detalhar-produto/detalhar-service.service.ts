import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { produtos } from '../DTOs/Produtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalharServiceService {

  data:string = 'http://localhost:8080/produto/';
  constructor(private http: HttpClient) { }

  consultaApi(id:number):Observable<any>{
    return this.http.get(this.data+`${id}`);
  }



}
