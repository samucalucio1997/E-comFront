import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './principal.service';
import { produtos } from './DTOs/Produtos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{  
  
  objs?: produtos[]=[];
  constructor(private srv:PrincipalService) {}
 
 
  ngOnInit(): void {
      this.srv.chama().forEach(
        (res:any) => {
          const file = new FileReader()
          for (let index = 0; index < res.length; index++) {
            const resp:Blob = res[index]['imgs'][0];
            console.log(resp);
            const itempro:produtos = {
              imgs: new ArrayBuffer(10), 
              nome: res[index]['produto']['nome'],
              qtd: res[index]['produto']['qtd'],
              precoUni: res[index]['produto']['precoUni'],
              categoria: res[index]['produto']['categoria']
            };
            file.onload = (e) => {
                itempro.imgs = e.target?.result as ArrayBuffer;
                this.objs?.push(itempro);
            }
            file.readAsDataURL(resp);
          };

        }
      )
  }
  
 
}
