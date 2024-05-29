import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url:string = "http://localhost:8080/home/login"
  headersRequest = {
      headers: new HttpHeaders()
  }
  constructor(private rout:Router,private httpclient: HttpClient) {}

  fazerLogin(login: Login):void{
    const forData:FormData = new FormData();
    const params:HttpParams = new HttpParams;
    params.append('username',String(login.login));
    
    forData.append('username',String(login.login));
    forData.append('password', String(login.password))
    this.httpclient.post(this.url,forData).subscribe((resp:any) => {
      localStorage.setItem('username',resp['user']['username']);
      localStorage.setItem('id',resp['user']['id']);
      localStorage.setItem('token',resp['token']);
      this.rout.navigate(['']);     
    });
  }
}
