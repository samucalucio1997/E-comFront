import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class GeraUserService {
  url = 'http://localhost:8080/home/cadastroUser';
  headersRequest={
    headers: new HttpHeaders(),    
  }
  constructor(private httpclient: HttpClient) {}

  ApiCadastro(file: File,usr:User):Observable<any>{
     const headers:HttpHeaders = new HttpHeaders();
     headers.set('username',String(usr.username));
     headers.set('password',String(usr.password));
     headers.set('first_name',String(usr.first_name));
     headers.set('last_name',String(usr.last_name));
     headers.set('email',String(usr.email));
     headers.set('cep',String(usr.cep));
     const formdata = new FormData();
     
     formdata.append("file",file,file.name);
     formdata.append("username",String(usr.username));
     formdata.append('password',String(usr.password));
     formdata.append('first_name',String(usr.first_name));
     formdata.append('last_name',String(usr.last_name));
     formdata.append('email',String(usr.email));
     formdata.append('cep',String(usr.cep));
     formdata.append('numcasa',String(usr.numcasa));
     formdata.append('is_active',String(usr.is_active));
     return this.httpclient.post(`${this.url}?file=${file}`,formdata,this.headersRequest);
  }
}
