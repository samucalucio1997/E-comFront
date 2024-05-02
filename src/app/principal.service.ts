import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  perf?:any;
  str:string = 'http://localhost:8080/home/Produtos';
  constructor(private cliente:HttpClient) {}
  chama():Observable<any>{
    return new Observable;
  }
}
