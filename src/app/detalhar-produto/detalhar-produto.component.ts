import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DetalharServiceService } from './detalhar-service.service';
import { produtos } from '../DTOs/Produtos';

@Component({
  selector: 'app-detalhar-produto',
  standalone: false,
  templateUrl: './detalhar-produto.component.html',
  styleUrl: './detalhar-produto.component.css'
})
export class DetalharProdutoComponent implements OnInit{
  public produto?: produtos;
  public lisimg:string[] = []

  
  constructor(private rout:ActivatedRoute, private source:DetalharServiceService) {}

  ngOnInit(): void {
    this.rout.queryParams.subscribe(
      (resp:any) => {
         this.consulta(resp['id']);
      });
  }

  consulta(id:number):void{
    this.source.consultaApi(id).subscribe(
      (resp:produtos) => {
         this.produto = resp;
         this.produto?.imgs.forEach(
          (imag:string) => {
            this.lisimg.push(`data:image/png;base64,${imag}`)
          }
         );
      }
    );
  }

  pagamentoProduto(){
    
  }
  
}
