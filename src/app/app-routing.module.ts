import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { HeaderComponent } from "./header/header.component";
import { DetalharProdutoComponent } from "./detalhar-produto/detalhar-produto.component";
  
const routes: Routes=[
  {path:'logar',component:LoginComponent},
  {path:'createUser', component:CreateUserComponent},
  {path:'header', component: HeaderComponent},
  {path: 'detalhar_produto',component: DetalharProdutoComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}