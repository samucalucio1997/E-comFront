import { Component } from '@angular/core';
import { PrincipalService } from '../principal.service';
import { Router } from '@angular/router';
import { produtos } from '../DTOs/Produtos';

@Component({
  selector: 'app-listar-produto',
  standalone: false,
  templateUrl: './listar-produto.component.html',
  styleUrl: './listar-produto.component.css'
})
export class ListarProdutoComponent {
  objs?: produtos[]=[];
  constructor(private srv:PrincipalService,private rout:Router){}
 
 
  ngOnInit(): void {
      this.srv.chama().forEach(
        (res:any) => {
          for (let index = 0; index < res.length; index++) {
            const itempro:produtos = {
              id: res[index]['produto']['id'],
              imgs: '', 
              nome: res[index]['produto']['nome'],
              qtd: res[index]['produto']['qtd'],
              precoUni: res[index]['produto']['precoUni'],
              categoria: res[index]['produto']['categoria']
            };
            let im:string = res[index]['imgs'][0];
            itempro.imgs = `data:image/png;base64, ${im}`;
            this.objs?.push(itempro);
          };
        }
      )
  }

  detalhar(id:number):void{
    
    this.rout.navigate(['/detalhar-produto',{state: { id: id }}]);
  }
}
