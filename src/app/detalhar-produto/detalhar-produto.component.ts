import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DetalharServiceService } from './detalhar-service.service';
import { produtos } from '../DTOs/Produtos';
import { produto } from '../DTOs/Produto';

@Component({
  selector: 'app-detalhar-produto',
  standalone: false,
  templateUrl: './detalhar-produto.component.html',
  styleUrl: './detalhar-produto.component.css'
})
export class DetalharProdutoComponent implements OnInit{
  public produto?: produto;
  public lisimg:string[] = []

  
  constructor(private rout:Router, 
    private source:DetalharServiceService,
    
  ) {}

  ngOnInit(): void {
    const resp = history.state['produto'];
    this.lisimg = history.state['img'];
    console.log(this.lisimg);
    this.produto = resp;
  }


  pagamentoProduto(){
     this.rout.navigate(['pagar-produto']);
  }
  
}
