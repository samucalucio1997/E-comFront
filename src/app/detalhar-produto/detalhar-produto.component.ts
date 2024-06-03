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
  public produto: produtos={
    id: 0,
    imgs: '',
    nome: '',
    qtd: 0,
    precoUni: 0,
    categoria: ''
  };

  
  constructor(private rout:ActivatedRoute, private source:DetalharServiceService) {}

  ngOnInit(): void {
    
    this.rout.queryParams.subscribe(
      (resp:any) => {
         this.consulta(resp['id']);
        console.log(resp['id']);
      });
  }

  consulta(id:number):void{
    this.source.consultaApi(id).subscribe(
      (resp:any) => {
        this.produto.imgs = `data:image/png;base64, ${resp['imgs']}`;
        var gen: any = resp['produto']; 
        this.produto.id = gen['id'];
        this.produto.categoria = gen['categoria'];
        this.produto.nome = gen['nome'];
        this.produto.precoUni = gen['precoUni'];
        this.produto.qtd = gen['qtd'];
      }
    );
  }
  
}
