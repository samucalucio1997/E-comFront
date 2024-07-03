import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { produtos } from '../DTOs/Produtos';
import { ListarProdutoServiceService } from './listar-produto-service.service';
import { produto } from '../DTOs/Produto';

@Component({
  selector: 'app-listar-produto',
  standalone: false,
  templateUrl: './listar-produto.component.html',
  styleUrl: './listar-produto.component.css'
})
export class ListarProdutoComponent {
  objs?: produtos[]=[];
  produto?: produtos;
  constructor(private srv:ListarProdutoServiceService,private rout:Router){}
 
 
  ngOnInit(): void {
      this.srv.chama().subscribe(
        (res:produtos[]) => {
            this.objs = res;
        }
      );
  }

  detalhar(produto:produtos):void{
    const images:string[]=[];
    produto.imgs.map(res => images.push(`data:image/png;base64,${res}`));
    this.rout.navigateByUrl('/detalhar-produto',{ state: {produto: produto.produto, img: images} });
  }
}
