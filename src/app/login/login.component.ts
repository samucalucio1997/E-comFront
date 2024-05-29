import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit{
  login:FormGroup<any>;
  reqp?:Router;
  constructor(fr:FormBuilder,private api : ApiServiceService) {
     this.login = fr.group({
         nome:['',Validators.required],
         senha:['',Validators.required],
         checkon:[false, Validators.required]
     })
  }
  ngOnInit(): void {
    this.login.get('nome')?.valueChanges.subscribe(
      () => { 
        this.login.get('checkon')?.setValue(true);
        if (localStorage.getItem('username')!=null) {
        }
    });
  }


  
  submeter():void{
    const lg:Login = new Login();
    lg.password = this.login.get('nome')?.value;
    lg.password = this.login.get('senha')?.value;
    
    this.api.fazerLogin(lg); 
    
  }
}
