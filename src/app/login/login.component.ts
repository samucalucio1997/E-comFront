import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Login } from './login';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:FormGroup<any>;
  reqp?:Router;
  constructor(fr:FormBuilder,private api : ApiServiceService) {
     this.login = fr.group({
         nome:['',Validators.required],
         senha:['',Validators.required]
     })
  }
  
  submeter():void{
    const lg:Login = new Login();
    lg.login = this.login.get('nome')?.value;
    lg.password = this.login.get('senha')?.value;
    this.api.fazerLogin(lg); 
  }
}
