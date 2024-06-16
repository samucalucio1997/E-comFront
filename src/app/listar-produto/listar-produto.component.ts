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
      this.srv.chama().subscribe(
        (res:produtos[]) => {
            this.objs = res;
        }
      );
  }

  detalhar(id:number):void{
    this.rout.navigate(['/detalhar-produto',{state: { id: id }}]);
  }
}
