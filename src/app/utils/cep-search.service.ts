import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endereco } from '../DTOs/endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepSearchService {

  constructor(private httpClient: HttpClient) { }

  consultaCep(cep: string):Observable<endereco> {
    return this.httpClient.get<endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
