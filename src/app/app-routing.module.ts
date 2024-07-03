import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { HeaderComponent } from "./header/header.component";
import { DetalharProdutoComponent } from "./detalhar-produto/detalhar-produto.component";
import { ListarProdutoComponent } from "./listar-produto/listar-produto.component";
import { PagarProdutoComponent } from "./pagar-produto/pagar-produto.component";
import { userguardGuard } from "./guard/userguard.guard";
  
const routes: Routes=[
  {path:'logar',component:LoginComponent},
  {path:'createUser', component:CreateUserComponent},
  {path:'header', component: HeaderComponent},
  {path:'detalhar-produto',component: DetalharProdutoComponent},
  {path:'pagar-produto',component:PagarProdutoComponent, canDeactivate:[userguardGuard]},
  {path:'', component: ListarProdutoComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}