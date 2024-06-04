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
          let produtos: produtos[];
          if (typeof res === 'string') {
            produtos = JSON.parse(res);
          } else {
            produtos = res;
          }

          produtos.forEach((json: produtos) => {
            var img:string[] = [];
            json.imgs.forEach((n: string) => {
              img.push(`data:image/png;base64,${n}`);
            });
            json.imgs = img;
            this.objs?.push(json);
          })

        }
      );
  }

  detalhar(id:number):void{
    this.rout.navigate(['/detalhar-produto',{state: { id: id }}]);
  }
}
