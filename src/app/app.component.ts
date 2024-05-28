import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './principal.service';
import { produtos } from './DTOs/Produtos';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{  
  
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

  detalhar(char:any):void{
    console.log('funfou legal '+ char);
    //sessionStorage.setItem('id_produto',char);
    this.rout.navigate(['/detalhar_produto',{id:char}]);
  }
  
 
}
