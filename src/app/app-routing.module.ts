import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { HeaderComponent } from "./header/header.component";
  
const routes: Routes=[
  {path:'logar',component:LoginComponent},
  {path:'createUser', component:CreateUserComponent},
  {path:'header', component: HeaderComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}