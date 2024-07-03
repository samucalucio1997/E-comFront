import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from './User';
import { GeraUserService } from './gera-user.service';
import { Router } from '@angular/router';
import { CepSearchService } from '../utils/cep-search.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit{
  public rua:string = '';
  public cidade:string = '';
  public estado:string = '';
  User:FormGroup
  image!:File 
  constructor(private fr:FormBuilder,private api:GeraUserService, private cep:CepSearchService) {
       this.User = this.fr.group({
        username: ['', Validators.required],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        file: ['', Validators.required],
        cep: ['', Validators.required],
        numcasa: ['', Validators.required],
        is_active: [true, Validators.required]
       })
  }
  ngOnInit(): void {
    this.User.get('file')?.valueChanges.subscribe(
      () => {}
    );
    this.User.get('cep')?.valueChanges.subscribe(
      (value) => { this.cep.consultaCep(value).subscribe(
        (res) => {
          this.rua = res.logradouro;
          this.cidade = res.localidade;
          this.estado = res.uf;
        }
      )}
    );
    
  }


  
  DoCadastro():void{
     const user:User = {
       username: this.User.get('username')?.value,
       first_name: this.User.get('first_name')?.value,
       last_name: this.User.get('last_name')?.value,
       email: this.User.get('email')?.value,
       cep: this.User.get('cep')?.value,
       password: this.User.get('password')?.value,
       is_active: true,
       ft_perfil: null,
       numcasa: this.User.get('numcasa')?.value
     }

     this.api.ApiCadastro(this.image,user).subscribe(res => {
      const router:Router = new Router();
      router.navigate(['/logar'])
      console.log(res)
     })
    // console.log(user);
  }
  Doevent(event:any){
     this.image = event.target.files[0];
  }
}
