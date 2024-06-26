import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CreateUserComponent } from "./create-user/create-user.component";
import { CommonModule } from "@angular/common";
import { ListarProdutoComponent } from "./listar-produto/listar-produto.component";
import { DetalharProdutoComponent } from "./detalhar-produto/detalhar-produto.component";
import { userguardGuard } from "./guard/userguard.guard";


@NgModule({
    declarations:[
        AppComponent,
        LoginComponent,
        HeaderComponent,
        ListarProdutoComponent,
        DetalharProdutoComponent,
        CreateUserComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule {}